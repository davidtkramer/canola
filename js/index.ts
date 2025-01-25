import { EventEmitter } from 'events';
import { CanSocketNative, type CanFilter } from './native.cjs';

export type CanFrame = {
  id: number;
  data: Buffer;
};

type CanEventMap = {
  message: [CanFrame];
};

export class CanSocket extends EventEmitter<CanEventMap> {
  socket: CanSocketNative;

  constructor(interfaceName: string, options?: { filters: Array<CanFilter> }) {
    super();
    this.socket = new CanSocketNative(
      interfaceName,
      options?.filters ?? [],
      this.handleFrame,
    );
  }

  // CanSocketBase holds a ref to this method, which is bound
  // to 'this', so instances do not get gc'd until CanSocketBase
  // unrefs this method.
  handleFrame = (id: number, data: Buffer) => {
    this.emit('message', { id, data });
  };

  write(id: number, data: Buffer) {
    this.socket.write(id, data);
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
