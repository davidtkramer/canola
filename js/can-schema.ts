import fs from 'fs';
import path from 'path';
import { MessageSchema, type MessageType } from './message-schema.js';
import { loadString } from './kcd-parser.js';
import type { NodeSchema, BusSchema } from './types.js';

export type AnyMessageSchema<T extends MessageType> = T extends any
  ? MessageSchema<T>
  : never;

type ByName<T extends MessageType, K extends string> = Extract<
  AnyMessageSchema<T>,
  MessageSchema<{ name: K; frameId: any; signals: any }>
>;

type ById<T extends MessageType, K extends number> = Extract<
  AnyMessageSchema<T>,
  MessageSchema<{ name: any; frameId: K; signals: any }>
>;

export type DecodedMessage<T extends MessageType> = T extends any
  ? {
    id: T['frameId'];
    name: T['name'];
    data: Reveal<T['signals']>;
  }
  : never;

type EncodedMessage<T extends MessageType> = {
  id: T['frameId'];
  name: T['name'];
  data: Buffer;
};

type Reveal<T> = {
  [K in keyof T]: T[K];
} & {};

export class CanSchema<T extends MessageType> {
  messages: Array<MessageSchema>;
  nodes: Array<NodeSchema>;
  buses: Array<BusSchema>;
  version?: string;

  constructor(
    messages: Array<MessageSchema>,
    nodes: Array<NodeSchema>,
    buses: Array<BusSchema>,
    version?: string,
  ) {
    this.messages = messages;
    this.nodes = nodes;
    this.buses = buses;
    this.version = version;
  }

  static loadFile<T extends MessageType>(filePath: string) {
    let file = fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8');
    return CanSchema.loadString<T>(file.replace(/>\s+</g, '><').trim());
  }

  static loadString<T extends MessageType>(
    xmlString: string,
    strict: boolean = true,
  ): CanSchema<T> {
    let { messages, nodes, buses, version } = loadString(xmlString, strict);
    return new CanSchema<T>(messages, nodes, buses, version);
  }

  getMessageSchemaByName<K extends T['name']>(name: K): ByName<T, K> {
    let message = this.messages.find(
      (message): message is ByName<T, K> => message.name === name,
    );
    if (message === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return message;
  }

  getMessageSchemaById<K extends number>(id: K): ById<T, K> {
    let message = this.messages.find((message) => message.frameId === id);
    if (message === undefined) {
      throw new Error(`Unable to find message with id '${id}'`);
    }
    return message as any;
  }

  encodeMessageByName<K extends T['name'], M extends MessageType = Extract<T, { name: K }>>(
    name: K,
    data: M['signals']
  ): Reveal<EncodedMessage<M>> {
    let messageSchema = this.getMessageSchemaByName(name);
    return {
      id: messageSchema.frameId,
      name,
      data: messageSchema.encode(data),
    };
  }

  encodeMessageById<K extends number, M extends MessageType = Extract<T, { frameId: K }>>(
    id: K,
    data: M['signals'],
  ): Reveal<EncodedMessage<M>> {
    let messageSchema = this.getMessageSchemaById(id);
    return {
      id,
      name: messageSchema.name,
      data: messageSchema.encode(data)
    };
  }

  decodeMessageByName<K extends T['name']>(
    name: K,
    data: Buffer,
  ): DecodedMessage<Extract<T, { name: K }>> {
    let schema = this.getMessageSchemaByName(name);
    return {
      id: schema.frameId,
      name: schema.name,
      data: schema.decode(data),
    } as DecodedMessage<Extract<T, { name: K }>>;
  }

  decodeMessageById<K extends number>(
    id: K,
    data: Buffer,
  ): DecodedMessage<Extract<T, { frameId: K }>> {
    let schema = this.getMessageSchemaById(id);
    return {
      id: schema.frameId,
      name: schema.name,
      data: schema.decode(data),
    } as DecodedMessage<Extract<T, { frameId: K }>>;
  }
}
