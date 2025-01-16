import { test } from "vitest";
import { promises as fs } from "fs";
import path from "path";
import { loadString } from "../parser/database.js";

test("multiplexed messages", async () => {
  let file = await fs.readFile(
    path.join(__dirname, "./files/multiplex.kcd"),
    "utf-8"
  );
  let db = loadString(file.replace(/>\s+</g, "><").trim());
  let message = db.messages.find((message) => message.frameId === 0x3c2)!;

  let data = {
    VCLEFT_switchStatusIndex: "VCLEFT_SWITCH_STATUS_INDEX_1",
    VCLEFT_swcLeftTiltRight: "SWITCH_OFF",
    VCLEFT_swcLeftPressed: "SWITCH_OFF",
    VCLEFT_swcRightTiltLeft: "SWITCH_OFF",
    VCLEFT_swcRightTiltRight: "SWITCH_OFF",
    VCLEFT_swcRightPressed: "SWITCH_OFF",
    VCLEFT_swcLeftTiltLeft: "SWITCH_OFF",
    VCLEFT_swcLeftScrollTicks: -1,
    VCLEFT_swcRightScrollTicks: 0,
    VCLEFT_btnWindowUpLR: 0,
    VCLEFT_btnWindowAutoUpLR: 0,
    VCLEFT_btnWindowDownLR: 0,
    VCLEFT_btnWindowAutoDownLR: 0,
    VCLEFT_2RowSeatReclineSwitch: 0,
    VCLEFT_2RowSeatCenterSwitch: 0,
    VCLEFT_2RowSeatLeftFoldFlatSwitc: 0,
    VCLEFT_2RowSeatRightFoldFlatSwit: 0,
    VCLEFT_2RowSeatBothFoldFlatSwitc: 0,
    VCLEFT_swcLeftDoublePress: 0,
    VCLEFT_swcRightDoublePress: 0,
  };
  let encoded = message.encode(data);
  console.log("encoded", encoded);

  // let decoded = message.decode(result)
  // console.log('decoded', decoded);
});

// console.log("frameId", message.frameId);
// console.log("name", message.name);
// console.log("length", message.length);
// console.log("headerId", message.headerId);
// console.log("headerByteOrder", message.headerByteOrder);
// console.log("isFd", message.isFd);
// console.log("isExtendedFrame", message.isExtendedFrame);
// console.log("unusedBitPattern", message.unusedBitPattern);
// console.log("comments", message.comments);
// console.log("protocol", message.protocol);
// console.log('signalTree', JSON.stringify(message.signalTree, null, 2));
// console.log('signals', JSON.stringify(message.signals, null, 2));
// console.log("isContainer", message.isContainer);
// console.log("comment", message.comment);
// console.log("isMultiplexed", message.isMultiplexed());