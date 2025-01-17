import fs from "fs";
import path from "path";
import { test, expect } from "vitest";
import { Database } from "../parser/database.js";
import { TypeGenerator } from '../type-generator.js'

test("generates types for multiplexed messages", async () => {
  const file = fs.readFileSync(
    path.join(__dirname, "./files/model-y.kcd"),
    "utf-8"
  );
  const db = Database.loadString(file.replace(/>\s+</g, "><").trim());
  const generator = new TypeGenerator(path.join(process.cwd(), "js/__test__"));

  await generator.generateTypes(db.messages);

  const generatedContent = await fs.promises.readFile(
    path.join(process.cwd(), "js/__test__", "types.ts"),
    "utf-8"
  );
  expect(generatedContent).toContain("export type Messages");
});
