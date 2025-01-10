import { EventEmitter } from "events";
import { CanSocketNative } from "./native.cjs";

export type CanFrame = {
  id: number,
  data: Buffer
}

type CanEventMap = {
  message: [CanFrame]
}

export class CanSocket extends EventEmitter<CanEventMap> {
  socket: CanSocketNative;

  constructor(interfaceName: string) {
    super();
    this.socket = new CanSocketNative(interfaceName, this.handleFrame);
  }

  // CanSocketBase holds a ref to this method, which is bound
  // to 'this', so instances do not get gc'd until CanSocketBase
  // unrefs this method.
  handleFrame = (frame: any) => {
    this.emit("message", frame);
  };

  write(id: number, data: Buffer) {
    this.socket.write(id, data);
  }

  close() {
    this.socket.close();
  }

  getWriteQueueSize() {
    return this.socket.getWriteQueueSize();
  }

  setSendBufferSize(size: number) {
    this.socket.setSendBufferSize(size);
  }
}
