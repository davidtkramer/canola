import fs from "fs";
import path from "path";
import { test, expect } from "vitest";
import { Database } from "../database.js";
import { TypeGenerator } from '../type-generator.js'

test("generates types for multiplexed messages", async () => {
  let file = fs.readFileSync(
    path.join(__dirname, "./files/model-y.kcd"),
    "utf-8"
  );
  let db = Database.loadString(file.replace(/>\s+</g, "><").trim());
  let generator = new TypeGenerator(path.join(process.cwd(), "js/__test__"));

  await generator.generateTypes(db.messages);

  let generatedContent = await fs.promises.readFile(
    path.join(process.cwd(), "js/__test__", "types.ts"),
    "utf-8"
  );
  expect(generatedContent).toContain("export type Messages");
});
