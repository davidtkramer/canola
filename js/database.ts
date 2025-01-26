import fs from 'fs';
import path from 'path';
import { Message, type MessageType } from './message.js';
import { loadString } from './kcd-parser.js';
import type { Node, Bus } from './types.js';

type ById<MU extends MessageType> = {
  [K in MU['frameId']]: Extract<MU, { frameId: K }>;
};
type ByName<MU extends MessageType> = {
  [K in MU['name']]: Extract<MU, { name: K }>;
};

export class Database<T extends MessageType> {
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

  static loadFile<T extends MessageType>(filePath: string) {
    let file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8');
    return Database.loadString<T>(file.replace(/>\s+</g, '><').trim());
  }

  static loadString<T extends MessageType>(
    xmlString: string,
    strict: boolean = true,
  ): Database<T> {
    let { messages, nodes, buses, version } = loadString(xmlString, strict);
    return new Database<T>(messages, nodes, buses, version);
  }

  getMessageByName<K extends T['name']>(name: K): Message<ByName<T>[K]> {
    let message = this.messages.find(
      (message): message is Message<ByName<T>[K]> => message.name === name,
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return message;
  }

  getMessageById<K extends T['frameId']>(id: K): Message<ById<T>[K]> {
    let message = this.messages.find(
      (message): message is Message<ById<T>[K]> => message.frameId === id,
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with id '${id}'`);
    }
    return message;
  }

  encodeMessageByName<K extends T['name']>(
    name: K,
    data: ByName<T>[K]['signals'],
  ): Buffer {
    return this.getMessageByName(name).encode(data);
  }

  encodeMessageById<K extends T['frameId']>(id: K, data: ById<T>[K]['signals']): Buffer {
    return this.getMessageById(id).encode(data);
  }

  decodeMessageByName<K extends T['name']>(
    name: K,
    data: Buffer,
  ): ByName<T>[K]['signals'] {
    return this.getMessageByName(name).decode(data);
  }

  decodeMessageById<K extends T['frameId']>(id: K, data: Buffer): ById<T>[K]['signals'] {
    return this.getMessageById(id).decode(data);
  }
}
