import { parseXml, XmlElement, XmlNode } from "@rgrove/parse-xml";
import {
  type ByteOrder,
  type Signal,
  type Message,
  type Node,
  type Bus,
  type InternalDatabase,
} from "./types.js";
import { IdentityConversion } from "./conversions.js";

export function loadString(
  xmlString: string,
  strict: boolean = true
): InternalDatabase {
  let { root } = parseXml(xmlString);

  if (root === null) {
    throw new Error("Document is empty");
  }

  if (root.name !== "NetworkDefinition") {
    throw new Error(`Expected root element tag 'NetworkDefinition', but got ${root.name}`);
  }

  let nodes = findAllByName(root, "Node").map((node) => ({
    id: node.attributes.id,
    name: node.attributes.name,
  }));

  let buses: Array<Bus> = [];
  let messages: Array<Message> = [];
  let version: string | undefined;

  // Version
  let document = findFirstByName(root, "Document");
  if (document) {
    version = document.attributes.version;
  }

  // Process buses and messages
  findAllByName(root, "Bus").forEach((bus) => {
    let busName = bus.name;
    let busBaudrate = parseInt(bus.attributes.baudrate || "500000");
    buses.push({ name: busName, baudrate: busBaudrate });

    // Process messages in this bus
    findAllByName(bus, "Message").forEach((message) => {
      messages.push(loadMessageElement(message, busName, nodes, strict));
    });
  });

  return {
    messages,
    nodes,
    buses,
    version,
  };
}

function loadMessageElement(
  message: XmlElement,
  busName: string,
  nodes: Array<Node>,
  strict: boolean
): Message {
  // Default values
  let name: string | undefined;
  let frameId: number | undefined;
  let isExtendedFrame = false;
  let notes: string | undefined;
  let length: number = 0;
  let interval: number | undefined;
  let senders: string[] = [];
  let signals: Signal[] = [];

  // Message XML attributes
  Object.entries(message.attributes).forEach(([key, value]) => {
    switch (key) {
      case "name":
        name = value as string;
        break;
      case "id":
        frameId = parseInt(value as string, 16);
        break;
      case "format":
        isExtendedFrame = value === "extended";
        break;
      case "length":
        if (value === "auto") {
          length = 0; // Will be calculated later
        } else {
          length = parseInt(value as string);
        }
        break;
      case "interval":
        interval = parseInt(value as string);
        break;
      default:
        console.debug(`Ignoring unsupported message attribute '${key}'`);
    }
  });

  if (!name || frameId === undefined) {
    throw new Error("Message must have name and frame ID");
  }

  // Notes
  let notesElement = findFirstByName(message, "Notes");
  if (notesElement) {
    notes = notesElement.text;
  }

  // Senders
  let producer = findFirstByName(message, "Producer");
  if (producer) {
    findAllByName(producer, "NodeRef").forEach((sender) => {
      if (sender.attributes.id) {
        let senderName = getNodeNameById(nodes, sender.attributes.id);
        if (senderName) {
          senders.push(senderName);
        }
      }
    });
  }

  // Signals
  message.children.filter(isXmlElement).forEach((element) => {
    if (element.name === "Signal") {
      signals.push(loadSignalElement(element, nodes));
    } else if (element.name === "Multiplex") {
      const muxSignal = loadSignalElement(element, nodes);
      muxSignal.isMultiplexer = true;
      signals.push(muxSignal);

      findAllByName(element, "MuxGroup").forEach((muxGroup) => {
        const muxId = parseInt(muxGroup.attributes.count || "");
        findAllByName(muxGroup, "Signal").forEach((signal) => {
          const muxedSignal = loadSignalElement(signal, nodes);
          muxedSignal.multiplexerIds = [muxId];
          muxedSignal.multiplexerSignal = muxSignal.name;
          signals.push(muxedSignal);
        });
      });
    }
  });

  // Calculate auto length if needed
  if (length === 0 && signals.length > 0) {
    const lastSignal = [...signals]
      .sort(
        (a, b) =>
          startBit(a.start, a.byteOrder) - startBit(b.start, b.byteOrder)
      )
      .pop()!;
    length = Math.ceil(
      (startBit(lastSignal.start, lastSignal.byteOrder) + lastSignal.length) / 8
    );
  }

  return {
    frame_id: frameId,
    isExtendedFrame: isExtendedFrame,
    name,
    length,
    signals,
    senders,
    cycleTime: interval,
    comments: notes ? { null: notes } : undefined,
    busName: busName,
    strict,
  };
}

function loadSignalElement(signal: XmlElement, nodes: Array<Node>): Signal {
  // Default values
  let name: string | undefined;
  let offset: number | undefined;
  let length = 1;
  let byteOrder: ByteOrder = "little_endian";
  let isSigned = false;
  let isFloat = false;
  let minimum: number | undefined;
  let maximum: number | undefined;
  let slope = 1;
  let intercept = 0;
  let unit: string | undefined;
  let labels: Record<number, string> | undefined;
  let notes: string | undefined;
  let receivers: string[] = [];

  // Signal XML attributes
  Object.entries(signal.attributes).forEach(([key, value]) => {
    switch (key) {
      case "name":
        name = value as string;
        break;
      case "offset":
        offset = parseInt(value as string);
        break;
      case "length":
        length = parseInt(value as string);
        break;
      case "endianess":
        byteOrder = `${value}_endian` as ByteOrder;
        break;
      default:
        console.debug(`Ignoring unsupported signal attribute '${key}'`);
    }
  });

  // Value element
  let value = findFirstByName(signal, "Value");
  if (value) {
    Object.entries(value.attributes).forEach(([key, val]) => {
      switch (key) {
        case "min":
          minimum = parseFloat(val as string);
          break;
        case "max":
          maximum = parseFloat(val as string);
          break;
        case "slope":
          slope = parseFloat(val as string);
          break;
        case "intercept":
          intercept = parseFloat(val as string);
          break;
        case "unit":
          unit = val as string;
          break;
        case "type":
          isSigned = val === "signed";
          isFloat = val === "single" || val === "double";
          break;
        default:
          console.debug(`Ignoring unsupported signal value attribute '${key}'`);
      }
    });
  }

  // Notes
  const notesElement = findFirstByName(signal, "Notes");
  if (notesElement) {
    notes = notesElement.text;
  }

  // Label set
  const labelSet = findFirstByName(signal, "LabelSet");
  if (labelSet) {
    let labels: Record<number, string> = {};
    findAllByName(labelSet, "Label").forEach((label) => {
      const labelValue = parseInt(label.attributes.value || "");
      const labelName = label.attributes.name || "";
      labels[labelValue] = labelName;
    });
  }

  // Receivers
  const consumer = findFirstByName(signal, "Consumer");
  if (consumer) {
    findAllByName(consumer, "NodeRef").forEach((receiver) => {
      if (receiver.attributes.id) {
        const nodeName = getNodeNameById(nodes, receiver.attributes.id);
        if (nodeName) {
          receivers.push(nodeName);
        }
      }
    });
  }

  if (!name || offset === undefined) {
    throw new Error("Signal must have name and offset");
  }

  return {
    name,
    start: startBit(offset, byteOrder),
    length,
    byteOrder: byteOrder,
    isSigned: isSigned,
    conversion: new IdentityConversion(isFloat, slope, intercept, labels),
    minimum,
    maximum,
    unit,
    receivers,
    isMultiplexer: false,
    comments: notes ? { null: notes } : undefined,
  };
}

function startBit(offset: number, byteOrder: ByteOrder): number {
  if (byteOrder === "big_endian") {
    return 8 * Math.floor(offset / 8) + (7 - (offset % 8));
  } else {
    return offset;
  }
}

function getNodeNameById(
  nodes: Array<Node>,
  nodeId: string
): string | undefined {
  return nodes.find((node) => node.id === nodeId)?.name;
}

function findAllByName(parent: XmlElement, name: string) {
  return parent.children.filter(
    (child) =>
      isXmlElement(child) && (child as XmlElement).name === name
  ) as Array<XmlElement>;
}

function findFirstByName(parent: XmlElement, name: string) {
  return parent.children.find(
    (child) =>
      isXmlElement(child) && (child as XmlElement).name === name
  ) as XmlElement | undefined;
}

function isXmlElement(
  element: XmlElement["children"][number]
): element is XmlElement {
  return element.type === XmlNode.TYPE_ELEMENT;
}
