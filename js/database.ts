import { Message } from "./message.js";
import { loadString } from "./kcd-parser.js";
import type { Node, Bus } from "./types.js";

export class Database<T extends Record<string, any>> {
  messages: Array<Message>;
  nodes: Array<Node>;
  buses: Array<Bus>;
  version?: string;

  constructor(
    messages: Array<Message>,
    nodes: Array<Node>,
    buses: Array<Bus>,
    version?: string
  ) {
    this.messages = messages;
    this.nodes = nodes;
    this.buses = buses;
    this.version = version;
  }

  static loadString<T extends Record<string, any>>(
    xmlString: string,
    strict: boolean = true
  ): Database<T> {
    let { messages, nodes, buses, version } = loadString(xmlString, strict);
    return new Database<T>(messages, nodes, buses, version);
  }

  getMessageByName<K extends keyof T>(name: K): Message<T[K]> {
    let message = this.messages.find(
      (message): message is Message<T[K]> => message.name === name
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return message;
  }

  getMessageById<K extends keyof T>(name: K): Message<T[K]> {
    let message = this.messages.find(
      (message): message is Message<T[K]> => message.name === name
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return message;
  }
}


