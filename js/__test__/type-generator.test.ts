import fs from "fs";
import path from "path";
import { test, expect } from "vitest";
import { Database } from "../database.js";
import { generateTypes } from '../type-generator.js'

test("generates types for multiplexed messages", async () => {
  let file = fs.readFileSync(
    path.join(process.cwd(), "js/__test__/files/model-y.kcd"),
    "utf-8"
  );
  let db = Database.loadString(file.replace(/>\s+</g, "><").trim());

  await generateTypes(db.messages, path.join(process.cwd(), "js/__test__"));

  let generatedContent = await fs.promises.readFile(
    path.join(process.cwd(), "js/__test__", "types.ts"),
    "utf-8"
  );
  expect(generatedContent).toContain("export type Messages");
});
