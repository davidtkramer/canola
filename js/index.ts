import { EventEmitter } from 'events';
import { CanSocketNative, Broadcast, type CanFilter } from './native.cjs';

export type CanFrame<Id = number> = {
  id: Id;
  data: Buffer;
};

type CanEventMap<Ids> = {
  message: [CanFrame<Ids>];
};

export class CanSocket<const Filters extends Array<CanFilter>> extends EventEmitter<
  CanEventMap<Filters[number]['id']>
> {
  socket: CanSocketNative;

  constructor(interfaceName: string, options?: { filters?: Filters }) {
    super();
    this.socket = new CanSocketNative(
      interfaceName,
      options?.filters ?? ([] as any),
      this.handleFrame,
    );
  }

  // CanSocketBase holds a ref to this method, which is bound
  // to 'this', so instances do not get gc'd until CanSocketBase
  // unrefs this method.
  handleFrame = (id: number, data: Buffer) => {
    this.emit('message', { id: id as any, data });
  };

  write(id: number, data: Buffer): void;
  write(params: { id: number; data: Buffer }): void;
  write(idOrParams: number | { id: number; data: Buffer }, data?: Buffer): void {
    if (typeof idOrParams === 'number') {
      this.socket.write(idOrParams, data!);
    } else if (idOrParams !== null && typeof idOrParams === 'object') {
      this.socket.write(idOrParams.id, idOrParams.data);
    } else {
      throw new Error(
        'First argument must be frame id or an object with id and data properties',
      );
    }
  }

  createBroadcast(options: {
    message: { id: number; data: Buffer; },
    interval: number;
    duration?: number;
  }): Broadcast {
    return this.socket.createBroadcast(
      options.message.id,
      options.message.data,
      options.interval,
      options.duration,
    );
  }

  sendBroadcast(options: {
    message: { id: number; data: Buffer; },
    interval: number;
    duration?: number;
  }): Promise<number> {
    let broadcast = this.createBroadcast(options);
    return broadcast.start();
  }

  close() {
    this.socket.close();
  }

  setFilters(filters: Array<CanFilter>) {
    this.socket.setFilters(filters);
  }

  getWriteQueueSize() {
    return this.socket.getWriteQueueSize();
  }

  setSendBufferSize(size: number) {
    this.socket.setSendBufferSize(size);
  }
}
