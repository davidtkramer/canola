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
} from "typescript";
import fs from "fs";
import path from "path";
import { Signal } from "./signal.js";
import {
  Message,
  type SignalBranch,
  type SignalNode,
} from "./message.js";

export async function generateTypes(messages: Array<Message>, outputDir: string): Promise<void> {
  let allTypes: Array<TypeAliasDeclaration> = [];

  // Generate message types
  messages.forEach((message) => {
    if (message.isMultiplexed()) {
      let types = generateMultiplexedTypes(message, message.signalTree!);
      allTypes.push(...types);
    } else {
      allTypes.push(generateRegularType(message));
    }
  });

  // Generate container type
  allTypes.push(generateContainerType(messages, 'MessagesByName', (message) => message.name));
  allTypes.push(generateContainerType(messages, 'MessagesById', (message) => message.frameId));
  allTypes.push(f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier('DatabaseType'),
    undefined,
    f.createTypeLiteralNode([
      f.createPropertySignature(
        undefined,
        f.createIdentifier('ByName'),
        undefined,
        f.createTypeReferenceNode(f.createIdentifier('MessagesByName'))
      ),
      f.createPropertySignature(
        undefined,
        f.createIdentifier('ById'),
        undefined,
        f.createTypeReferenceNode(f.createIdentifier('MessagesById'))
      ),
    ])
  ));


  // Generate output
  let sourceFile = createSourceFile(
    "types.ts",
    "",
    ScriptTarget.Latest,
    false,
    ScriptKind.TS
  );
  let printer = createPrinter({ newLine: NewLineKind.LineFeed });
  let outputs = allTypes.map((type) =>
    printer.printNode(EmitHint.Unspecified, type, sourceFile)
  );

  let finalOutput = outputs.join("\n\n");

  // Write to file
  if (!fs.existsSync(outputDir)) {
    await fs.promises.mkdir(outputDir, { recursive: true });
  }
  let outputPath = path.join(outputDir, "types.ts");
  await fs.promises.writeFile(outputPath, finalOutput);
}

function generateRegularType(message: Message): TypeAliasDeclaration {
  let members = message.signals.map((signal) => {
    let typeNode = generateSignalTypeNode(signal);
    return f.createPropertySignature(
      undefined,
      f.createIdentifier(signal.name),
      undefined,
      typeNode
    );
  });

  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(message.name),
    undefined,
    f.createTypeLiteralNode(members)
  );
}

function generateMultiplexedTypes(
  message: Message,
  signalNodes: Array<SignalNode>
): Array<TypeAliasDeclaration> {
  let types: Array<TypeAliasDeclaration> = [];

  for (let node of signalNodes) {
    if (typeof node === "string") continue;

    let multiplexName = Object.keys(node)[0];
    if (multiplexName === undefined) {
      throw new Error("Empty multiplex node");
    }
    let variants = Object.entries(node[multiplexName]!);

    // Generate variant types
    let variantTypes = variants.map(([index, signals]) =>
      generateMultiplexVariantType(
        message,
        multiplexName,
        index,
        signals.filter((s): s is string => typeof s === "string")
      )
    );
    types.push(...variantTypes);

    // Generate union type
    types.push(
      generateMultiplexUnionType(
        message.name,
        multiplexName,
        variants.map(([index]) => index)
      )
    );

    // Handle nested multiplexers
    variants.forEach(([_, signals]) => {
      let nestedTypes = generateMultiplexedTypes(
        message,
        signals.filter((s): s is SignalBranch => typeof s !== "string")
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
  signals: Array<string>
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
      f.createLiteralTypeNode(discriminantNode)
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
        typeNode
      );
    }),
  ];

  let variantTypeName = `${message.name}_${index}`;
  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(variantTypeName),
    undefined,
    f.createTypeLiteralNode(members)
  );
}

function generateMultiplexUnionType(
  messageName: string,
  multiplexName: string,
  variants: Array<string>
): TypeAliasDeclaration {
  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(messageName),
    undefined,
    f.createUnionTypeNode(
      variants.map((index) =>
        f.createTypeReferenceNode(
          f.createIdentifier(`${messageName}_${index}`),
          undefined
        )
      )
    )
  );
}

function generateSignalTypeNode(signal: Signal): TypeNode {
  if (signal.conversion.choices) {
    let literals = Object.values(signal.conversion.choices).map((value) =>
      f.createLiteralTypeNode(f.createStringLiteral(value))
    );
    return f.createUnionTypeNode(literals);
  }
  return f.createKeywordTypeNode(SyntaxKind.NumberKeyword);
}

function generateContainerType(
  messages: Array<Message>,
  containerTypeName: string,
  propertyIdentifier: (message: Message) => string | number
): TypeAliasDeclaration {
  let members = messages.map((message) =>
    f.createPropertySignature(
      undefined,
      f.createIdentifier(propertyIdentifier(message).toString()),
      undefined,
      f.createTypeReferenceNode(
        f.createIdentifier(message.name),
        undefined
      )
    )
  );

  return f.createTypeAliasDeclaration(
    [f.createModifier(SyntaxKind.ExportKeyword)],
    f.createIdentifier(containerTypeName),
    undefined,
    f.createTypeLiteralNode(members)
  );
}
