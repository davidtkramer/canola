import {
  factory as f,
  createSourceFile,
  createPrinter,
  NewLineKind,
  SyntaxKind,
  ScriptTarget,
  ScriptKind,
  EmitHint,
  type TypeNode,
  type TypeAliasDeclaration,
} from 'typescript';
import fs from 'fs';
import path from 'path';
import { Signal } from './signal.js';
import { Message, type SignalBranch, type SignalNode } from './message.js';

export async function generateTypes(
  messages: Array<Message>,
  outputDir: string,
): Promise<void> {
  let allTypes: Array<TypeAliasDeclaration> = [];

  // Generate message types
  for (let message of messages) {
    if (message.isMultiplexed()) {
      allTypes.push(...generateMultiplexedTypes(message, message.signalTree!));
    } else {
      allTypes.push(generateRegularType(message));
    }

    let messageType = f.createTypeAliasDeclaration(
      [f.createModifier(SyntaxKind.ExportKeyword)],
      f.createIdentifier(message.name),
      undefined,
      f.createTypeLiteralNode([
        f.createPropertySignature(
          undefined,
          f.createIdentifier('frameId'),
          undefined,
          f.createLiteralTypeNode(f.createNumericLiteral(message.frameId)),
        ),
        f.createPropertySignature(
          undefined,
          f.createIdentifier('name'),
          undefined,
          f.createLiteralTypeNode(f.createStringLiteral(message.name)),
        ),
        f.createPropertySignature(
          undefined,
          f.createIdentifier('signals'),
          undefined,
          f.createTypeReferenceNode(f.createIdentifier(`${message.name}_Signals`)),
        ),
      ]),
    );
    allTypes.push(messageType);
  }

  // Generate container type
  let messageUnion = f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier('Messages'),
    undefined,
    f.createUnionTypeNode(
      messages.map((message) =>
        f.createTypeReferenceNode(f.createIdentifier(message.name), undefined),
      ),
    ),
  );
  allTypes.push(messageUnion);

  // Generate output
  let sourceFile = createSourceFile(
    'types.ts',
    '',
    ScriptTarget.Latest,
    false,
    ScriptKind.TS,
  );
  let printer = createPrinter({ newLine: NewLineKind.LineFeed });
  let outputs = allTypes.map((type) =>
    printer.printNode(EmitHint.Unspecified, type, sourceFile),
  );

  let finalOutput = outputs.join('\n\n');

  // Write to file
  if (!fs.existsSync(outputDir)) {
    await fs.promises.mkdir(outputDir, { recursive: true });
  }
  let outputPath = path.join(outputDir, 'types.ts');
  await fs.promises.writeFile(outputPath, finalOutput);
}

function generateRegularType(message: Message): TypeAliasDeclaration {
  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(`${message.name}_Signals`),
    undefined,
    f.createTypeLiteralNode(
      message.signals.map((signal) =>
        f.createPropertySignature(
          undefined,
          f.createIdentifier(signal.name),
          undefined,
          generateSignalTypeNode(signal),
        ),
      ),
    ),
  );
}

function generateMultiplexedTypes(
  message: Message,
  signalNodes: Array<SignalNode>,
): Array<TypeAliasDeclaration> {
  let types: Array<TypeAliasDeclaration> = [];

  for (let node of signalNodes) {
    if (typeof node === 'string') continue;

    let multiplexName = Object.keys(node)[0];
    if (multiplexName === undefined) {
      throw new Error('Empty multiplex node');
    }
    let variants = Object.entries(node[multiplexName]!);

    // Generate variant types
    let variantTypes = variants.map(([index, signals]) =>
      generateMultiplexVariantType(
        message,
        multiplexName,
        index,
        signals.filter((s): s is string => typeof s === 'string'),
      ),
    );
    types.push(...variantTypes);

    // Generate union type
    types.push(
      generateMultiplexUnionType(
        message.name,
        variants.map(([index]) => index),
      ),
    );

    // Handle nested multiplexers
    variants.forEach(([_, signals]) => {
      let nestedTypes = generateMultiplexedTypes(
        message,
        signals.filter((s): s is SignalBranch => typeof s !== 'string'),
      );
      types.push(...nestedTypes);
    });
  }

  return types;
}

function generateMultiplexVariantType(
  message: Message,
  multiplexName: string,
  index: number | string,
  signals: Array<string>,
): TypeAliasDeclaration {
  let signal = message.getSignalByName(multiplexName);
  let discriminantNode: any;

  if (signal.conversion.choices) {
    let value = signal.conversion.choices[Number(index)]!;
    discriminantNode = f.createStringLiteral(value);
  } else {
    discriminantNode = f.createNumericLiteral(index.toString());
  }

  let members = [
    // Discriminant property
    f.createPropertySignature(
      undefined,
      f.createIdentifier(multiplexName),
      undefined,
      f.createLiteralTypeNode(discriminantNode),
    ),
    // Signal properties
    ...signals.map((signalName) => {
      let signal = message.signals.find((s) => s.name === signalName);
      if (!signal) throw new Error(`Signal ${signalName} not found`);

      let typeNode = generateSignalTypeNode(signal);
      return f.createPropertySignature(
        undefined,
        f.createIdentifier(signalName),
        undefined,
        typeNode,
      );
    }),
  ];

  let variantTypeName = `${message.name}_Signals_${index}`;
  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(variantTypeName),
    undefined,
    f.createTypeLiteralNode(members),
  );
}

function generateMultiplexUnionType(
  messageName: string,
  variants: Array<string>,
): TypeAliasDeclaration {
  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(`${messageName}_Signals`),
    undefined,
    f.createUnionTypeNode(
      variants.map((index) =>
        f.createTypeReferenceNode(
          f.createIdentifier(`${messageName}_Signals_${index}`),
          undefined,
        ),
      ),
    ),
  );
}

function generateSignalTypeNode(signal: Signal): TypeNode {
  if (signal.conversion.choices) {
    let literals = Object.values(signal.conversion.choices).map((value) =>
      f.createLiteralTypeNode(f.createStringLiteral(value)),
    );
    return f.createUnionTypeNode(literals);
  }
  return f.createKeywordTypeNode(SyntaxKind.NumberKeyword);
}
