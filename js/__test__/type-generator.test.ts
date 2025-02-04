import fs from 'fs';
import path from 'path';
import { test, expect } from 'vitest';
import { CanSchema } from '../can-schema.js';
import { generateTypes } from '../type-generator.js';

test('generates types', async () => {
  let cs = CanSchema.loadFile('js/__test__/files/model-y.kcd');
  let outputPath = path.join(
    process.cwd(),
    'js/__test__/files/type-generator.test.types.ts',
  );

  await generateTypes(cs.messages, outputPath);

  let generatedContent = await fs.promises.readFile(outputPath, 'utf-8');
  expect(generatedContent).toContain('export type Messages');
});
