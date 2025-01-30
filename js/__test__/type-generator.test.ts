import fs from 'fs';
import path from 'path';
import { test, expect } from 'vitest';
import { CanSchema } from '../can-schema.js';
import { generateTypes } from '../type-generator.js';

test('generates types for multiplexed messages', async () => {
  let cs = CanSchema.loadFile('js/__test__/files/model-y.kcd');

  await generateTypes(cs.messages, path.join(process.cwd(), 'js/__test__'));

  let generatedContent = await fs.promises.readFile(
    path.join(process.cwd(), 'js/__test__', 'types.ts'),
    'utf-8',
  );
  expect(generatedContent).toContain('export type Messages');
});
