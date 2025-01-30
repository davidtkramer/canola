import { EventEmitter } from 'events';
import { CanSocketNative, type CanFilter } from './native.cjs';

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
