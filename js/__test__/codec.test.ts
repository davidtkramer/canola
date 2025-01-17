import { expect, test } from "vitest";
import { promises as fs } from "fs";
import path from "path";
import { Database } from "../parser/database.js";
import { buffer } from "./utils.js";
import { Messages } from "./types.js";

test("encodes and decodes multiplexed messages", async () => {
  let file = await fs.readFile(
    path.join(__dirname, "./files/model-y.kcd"),
    "utf-8"
  );
  let db = Database.loadString<Messages>(file.replace(/>\s+</g, "><").trim());
  let message = db.getMessageByName('ID3C2VCLEFT_switchStatus');

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
  } as const;
  let encoded = message.encode(data);
  expect(encoded).toEqual(buffer("29553f0000000000"));

  let decoded = message.decode(encoded);
  expect(decoded).toEqual(data);
});
