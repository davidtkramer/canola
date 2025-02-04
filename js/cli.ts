#! /usr/bin/env node
import path from 'path';
import { CanSchema } from './can-schema.js';
import { generateTypes } from './type-generator.js';

let command = process.argv[2] as 'type-gen' | (string & {}) | undefined;
if (command === undefined) {
  throw new Error('Command is required');
}

switch (command) {
  case 'type-gen': {
    let schemaFilePath = process.argv[3] as string;
    if (schemaFilePath === undefined) {
      throw new Error('Schema file path is required');
    }
    let outputFilePath = process.argv[4] ?? 'types.ts';
    let cs = CanSchema.loadFile(schemaFilePath);
    await generateTypes(cs.messages, path.join(process.cwd(), outputFilePath));
    break;
  }
  default: {
    throw new Error(`Unsupported command: '${command}'`);
  }
}
