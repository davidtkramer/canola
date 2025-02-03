# CAN Sniffer

This is a Node.js command line utility that displays CAN messages in real-time. Useful for reverse engineering tasks.

## Usage

To run the CAN Bus Sniffer:

```
node index.js <can-interface>
```

Replace <can-interface> with the name of the CAN interface you want to sniff, for example, can0.

Once the application is running, you will see the captured CAN messages displayed in the terminal. The message ID is dispalyed in the left-most column, follwed by the latest data bytes for that message. Bytes that recently changed will be momentarily highlighted in green. Stale bytes, i.e. those that have never changed, will be greyed out.

### Notching

Press `n` to 'notch' all bits that have changed since the sniffer started or since the last notch.

Once a bit is notched, any future toggling of that bit will not cause the byte to be highlighed green. This is useful for reducing visual noise when reverse engineering a particular message.

For example, say you're figuring out how to move a powered seat forward/back. You can notch all changed bits, move your seat forward/back via the physical control, and then see which bits light up green.

### Hide Stale Messages

Press `h` to toggle hiding all stale messages, i.e. messages with bytes that have never changed since the sniffer started. If a bit in a stale hidden message changes, it will re-appear in the list automatically.

### Exit

Press `Esc`, `q`, or `Ctrl+C` to quit
