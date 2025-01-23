import blessed from 'blessed';
import { CanSocket } from './index.js';

// Validate input

let canInterface = process.argv[2] as string;
if (canInterface === undefined) {
  throw new Error('can interface is required');
}

// Data management

type ByteLog = {
  currentValue: number;
  notchedBitMask: number;
  newBitValues: number;
  lastChangeAt: bigint;
  lastUnnotchedChangeAt: bigint;
};
type Message = {
  id: number;
  hexId: string;
  bytes: Array<ByteLog>;
  lastChange: bigint;
};
let messageIds: Array<number> = [];
let messages = new Map<number, Message>();

let socket = new CanSocket(canInterface);
socket.on('message', (frame) => {
  let message = messages.get(frame.id);

  if (message === undefined) {
    // Add id to sorted list
    const index = messageIds.findIndex((x) => x > frame.id);
    if (index === -1) {
      messageIds.push(frame.id);
    } else {
      messageIds.splice(index, 0, frame.id);
    }

    let bytes: Array<ByteLog> = [];
    for (let value of frame.data) {
      bytes.push({
        currentValue: value,
        newBitValues: 0,
        notchedBitMask: 0,
        lastChangeAt: 0n,
        lastUnnotchedChangeAt: 0n,
      })
    }
    message = {
      id: frame.id,
      hexId: frame.id.toString(16).padStart(4, '0'),
      bytes,
      lastChange: 0n
    };
    messages.set(frame.id, message);
    return;
  }

  let currentTime = process.hrtime.bigint();
  for (let i = 0; i < frame.data.length; i++) {
    let value = frame.data[i]!;
    let byte = message.bytes[i];
    if (byte === undefined) {
      message.bytes[i] = {
        currentValue: value,
        newBitValues: 0,
        notchedBitMask: 0,
        lastChangeAt: currentTime,
        lastUnnotchedChangeAt: currentTime,
      };
      message.lastChange = currentTime;
    } else if (byte.currentValue != value) {
      let changedBits = byte.currentValue ^ value;
      byte.newBitValues |= changedBits;
      let unnotchedChanges = changedBits & ~byte.notchedBitMask;
      if (unnotchedChanges !== 0) {
        byte.lastUnnotchedChangeAt = currentTime;
      }

      byte.currentValue = value;
      byte.lastChangeAt = currentTime;
      message.lastChange = currentTime;
    }
  }
});

// UI

const screen = blessed.screen({
  smartCSR: true,
  title: 'CAN Messages',
});
const list = blessed.list({
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  keys: true,
  vi: true,
  mouse: true,
  tags: true,
  border: 'line',
  scrollable: true,
  scrollbar: {
    ch: ' ',
    track: {
      bg: 'grey',
    },
    style: {
      inverse: true,
    },
  },
});
screen.append(list);
list.focus();

screen.key(['escape', 'q', 'C-c'], () => {
  socket.close();
  return process.exit(0);
});

screen.key(['n'], () => {
  for (let [_id, message] of messages) {
    for (let byte of message.bytes) {
      // Add new changes to notched mask
      byte.notchedBitMask |= byte.newBitValues;
      // Clear the new changes
      byte.newBitValues = 0;
      // Reset unnotched change time since we just notched everything
      byte.lastUnnotchedChangeAt = 0n;
    }
  }
});

let hideStale = false;
screen.key(['h'], () => {
  hideStale = !hideStale;
});

let notchInterval = 1000n * 1_000_000n;
setInterval(() => {
  let notchWindow = process.hrtime.bigint() - notchInterval;

  let items: Array<string> = [];
  for (let id of messageIds) {
    let message = messages.get(id)!;

    if (hideStale && message.lastChange === 0n) {
      continue;
    }

    let hexBytes = message.bytes
      .map((byte) => {
        let hex = byte.currentValue.toString(16).padStart(2, '0');
        if (byte.lastUnnotchedChangeAt > notchWindow) {
          return `{green-bg}{black-fg}${hex}{/}`;
        } else if (byte.lastChangeAt === 0n) {
          return `{grey-fg}${hex}{/}`;
        } else {
          return hex;
        }
      })
      .join(' ');
    items.push(`0x${message.hexId} ${hexBytes}`);
  }

  list.setItems(items);
  screen.render();
}, 50);
screen.render();
