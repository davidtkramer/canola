import path from 'path';
import fs from 'fs';
import {
  factory as f,
  SyntaxKind,
  NodeFlags,
  NewLineKind,
  createPrinter,
} from 'typescript';
import { test as originalTest, type TestAPI, type TestFunction } from 'vitest';
import { CanSchema } from '../../can-schema.js';
import { generateTypes } from '../../type-generator.js';
import type { MessageSchema } from '../../message-schema.js';
import type { TestMessages } from '../files/generated/index.js';
import { h, createRoot } from './jsx-runtime.js';

export function createBus<Name extends string>(busName: Name, node: h.JSX.Element) {
  let root = createRoot();

  let str = root.render(<networkdefinition>{node}</networkdefinition>);
  console.log(str);
  let schema = CanSchema.loadString(str);

  let outputPath = path.join(
    process.cwd(),
    `js/__test__/files/generated/${toKabobCase(busName)}.d.ts`,
  );
  generateTypes(schema.messages, outputPath).then(() => {
    generateModuleDeclaration(outputPath, toUpperCamelCase(busName));
  });

  return schema as CanSchema<TestMessages[ToUpperCamelCase<Name>]>;
}

function _test<Name extends string>(
  name: Name,
  fn: TestFunction<{ message: Message<Name> }>,
) {
  originalTest(name, (context) => {
    (context as any).message = createMessage(name);
    fn(context as any);
  });
}

export const test: typeof _test & TestAPI = Object.assign(_test, originalTest);

export type Message<
  Name extends string,
  M extends MessageSchema = MessageSchema<TestMessages[ToUpperCamelCase<Name>]>,
> = {
  (node: h.JSX.Element): M;
};

function createMessage<Name extends string>(testName: Name) {
  let schemaName = toUpperCamelCase(testName);
  let root = createRoot(schemaName);

  return function message(node: h.JSX.Element) {
    let schema = CanSchema.loadString(
      root.render(
        <networkdefinition>
          <bus name='vehicle'>{node}</bus>
        </networkdefinition>,
      ),
    );
    if (schema.messages.length !== 1) {
      throw new Error('Expected exactly one message schema');
    }

    let outputPath = path.join(
      process.cwd(),
      `js/__test__/files/generated/${toKabobCase(testName)}.d.ts`,
    );
    generateTypes(schema.messages, outputPath).then(() => {
      generateModuleDeclaration(outputPath, schemaName);
    });

    return schema.messages[0] as MessageSchema<TestMessages[Name]>;
  };
}

function generateModuleDeclaration(outputPath: string, name: string) {
  let property = f.createPropertySignature(
    undefined,
    f.createIdentifier(name),
    undefined,
    f.createTypeReferenceNode(f.createIdentifier('Messages')),
  );

  let interfaceDecl = f.createInterfaceDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier('TestMessages'),
    undefined,
    undefined,
    [property],
  );

  let moduleDecl = f.createModuleDeclaration(
    [f.createModifier(SyntaxKind.DeclareKeyword)],
    f.createStringLiteral('./index.js'),
    f.createModuleBlock([interfaceDecl]),
  );

  let sourceFile = f.createSourceFile(
    [moduleDecl],
    f.createToken(SyntaxKind.EndOfFileToken),
    NodeFlags.None,
  );
  let printer = createPrinter({ newLine: NewLineKind.LineFeed });
  let declarationText = printer.printFile(sourceFile);

  fs.appendFileSync(outputPath, '\n\n' + declarationText);
}

type ToUpperCamelCase<S extends string> = S extends `${infer Word}${' '}${infer Rest}`
  ? `${Capitalize<Word>}${ToUpperCamelCase<Rest>}`
  : Capitalize<S>;
type Capitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${Lowercase<R>}`
  : S;
function toUpperCamelCase<S extends string>(str: S): ToUpperCamelCase<S> {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('') as ToUpperCamelCase<S>;
}

function toKabobCase(str: string) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.toLowerCase())
    .join('-');
}
