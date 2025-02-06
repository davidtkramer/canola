import fs from 'fs';
import path from 'path';
import { MessageSchema, type MessageType } from './message-schema.js';
import { loadString } from './kcd-parser.js';
import type { NodeSchema, BusSchema, Reveal } from './types.js';

type AnyMessageSchema<T extends MessageType> = T extends any ? MessageSchema<T> : never;

type MessageSchemaByName<
  T extends MessageType,
  K extends string,
> = string extends T['name']
  ? MessageSchema<MessageType>
  : Extract<AnyMessageSchema<T>, MessageSchema<{ name: K; frameId: any; signals: any }>>;
// type MessageSchemaByName<T extends MessageType, K extends string> = Extract<
//   AnyMessageSchema<T>,
//   MessageSchema<{ name: string extends T['name'] ? string : K; frameId: any; signals: any }>
// >;

type MessageSchemaById<T extends MessageType, K extends number> = Extract<
  AnyMessageSchema<T>,
  MessageSchema<{ name: any; frameId: K; signals: any }>
>;

type DecodeMessageParams<T extends MessageType> =
  | { id: number; data: Buffer; name?: never }
  | { name: T['name']; data: Buffer; id?: never };

type DecodedMessage<T extends MessageType> = T extends any
  ? {
      id: T['frameId'];
      name: T['name'];
      data: T['signals'];
    }
  : never;

type EncodeMessageParams<T extends MessageType> = T extends any
  ?
      | {
          id: T['frameId'];
          name: T['name'];
          data: T['signals'];
        }
      | {
          id: T['frameId'];
          name?: never;
          data: T['signals'];
        }
      | {
          id?: never;
          name: T['name'];
          data: T['signals'];
        }
  : never;

type EncodedMessage<T extends MessageType> = {
  id: T['frameId'];
  name: T['name'];
  data: Buffer;
};

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

  getMessageSchemaByName<K extends T['name']>(name: K): MessageSchemaByName<T, K> {
    let messageSchema = this.messages.find(
      (message): message is MessageSchemaByName<T, K> => message.name === name,
    );
    if (messageSchema === undefined) {
      throw new Error(`Unable to find message with name '${String(name)}'`);
    }
    return messageSchema;
  }

  getMessageSchemaById<K extends number>(id: K): MessageSchemaById<T, K> {
    let messageSchema = this.messages.find((message) => message.frameId === id);
    if (messageSchema === undefined) {
      throw new Error(`Unable to find message with id '${id}'`);
    }
    return messageSchema as any;
  }

  decode<P extends DecodeMessageParams<T>>(
    params: P,
  ): P extends { name: infer N }
    ? Reveal<DecodedMessage<Extract<T, { name: N }>>>
    : P extends { id: infer I }
      ? Reveal<DecodedMessage<Extract<T, { frameId: I }>>>
      : never {
    if (params.id !== undefined) {
      return this.decodeById(params.id, params.data) as any;
    } else if (params.name !== undefined) {
      return this.decodeByName(params.name, params.data) as any;
    } else {
      throw new Error('Either id or name must be provided');
    }
  }

  decodeByName<K extends T['name']>(
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

  decodeById<K extends number>(
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

  encode<P extends EncodeMessageParams<T>>(
    params: P,
  ): P extends { name: infer N }
    ? Reveal<EncodedMessage<Extract<T, { name: N }>>>
    : P extends { id: infer I }
      ? Reveal<EncodedMessage<Extract<T, { frameId: I }>>>
      : never {
    if (params.id !== undefined) {
      return this.encodeById(params.id, params.data) as any;
    } else if (params.name !== undefined) {
      return this.encodeByName(params.name, params.data) as any;
    } else {
      throw new Error('Either id or name must be provided');
    }
  }

  encodeByName<K extends T['name'], M extends Extract<T, { name: K }>>(
    name: K,
    data: M['signals'],
  ): Reveal<EncodedMessage<M>> {
    let messageSchema = this.getMessageSchemaByName(name);
    return {
      id: messageSchema.frameId,
      name,
      data: messageSchema.encode(data),
    };
  }

  encodeById<K extends number, M extends Extract<T, { frameId: K }>>(
    id: K,
    data: M['signals'],
  ): Reveal<EncodedMessage<M>> {
    let messageSchema = this.getMessageSchemaById(id);
    return {
      id,
      name: messageSchema.name,
      data: messageSchema.encode(data),
    };
  }
}
