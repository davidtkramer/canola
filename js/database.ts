import { Message, type SignalMap } from './message.js';
import { loadString } from './kcd-parser.js';
import type { Node, Bus } from './types.js';

type DefaultDatabaseType = {
  ByName: Record<string, any>;
  ById: Record<number, any>;
};

export class Database<T extends DefaultDatabaseType> {
  messages: Array<Message>;
  nodes: Array<Node>;
  buses: Array<Bus>;
  version?: string;

  constructor(
    messages: Array<Message>,
    nodes: Array<Node>,
    buses: Array<Bus>,
    version?: string,
  ) {
    this.messages = messages;
    this.nodes = nodes;
    this.buses = buses;
    this.version = version;
  }

  static loadString<T extends DefaultDatabaseType>(
    xmlString: string,
    strict: boolean = true,
  ): Database<T> {
    let { messages, nodes, buses, version } = loadString(xmlString, strict);
    return new Database<T>(messages, nodes, buses, version);
  }

  getMessageByName<K extends keyof T['ByName']>(name: K): Message<T['ByName'][K]> {
    let message = this.messages.find(
      (message): message is Message<T['ByName'][K]> => message.name === name,
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return message;
  }

  getMessageById<K extends keyof T['ById'] & number>(id: K): Message<T['ById'][K]> {
    let message = this.messages.find(
      (message): message is Message<T['ById'][K]> => message.frameId === id,
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with id '${id}'`);
    }
    return message;
  }

  encodeMessageByName<K extends keyof T['ByName']>(
    name: K,
    data: T['ByName'][K],
  ): Buffer {
    return this.getMessageByName(name).encode(data);
  }

  encodeMessageById<K extends number & keyof T['ById']>(
    id: K,
    data: T['ById'][K],
  ): Buffer {
    return this.getMessageById(id).encode(data);
  }

  decodeMessageByName<K extends keyof T['ByName']>(
    name: K,
    data: Buffer,
  ): Message<T['ByName'][K]> {
    return this.getMessageByName(name).decode(data);
  }

  decodeMessageById<K extends number & keyof T['ById']>(
    id: K,
    data: Buffer,
  ): Message<T['ById'][K]> {
    return this.getMessageById(id).decode(data);
  }
}
