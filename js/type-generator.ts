import {
  factory,
  createSourceFile,
  createPrinter,
  NewLineKind,
  SyntaxKind,
  ScriptTarget,
  ScriptKind,
  EmitHint,
  type TypeNode,
  type TypeAliasDeclaration,
  type SourceFile,
  type Printer,
} from "typescript";
import fs from "fs";
import path from "path";
import { Signal } from "./parser/signal.js";
import {
  Message,
  type SignalBranch,
  type SignalNode,
} from "./parser/message.js";

export class TypeGenerator {
  private sourceFile: SourceFile;
  private printer: Printer;

  constructor(private outputDir: string) {
    this.sourceFile = createSourceFile(
      "types.ts",
      "",
      ScriptTarget.Latest,
      false,
      ScriptKind.TS
    );
    this.printer = createPrinter({
      newLine: NewLineKind.LineFeed,
    });
  }

  private generateSignalTypeNode(signal: Signal): TypeNode {
    if (signal.conversion.choices) {
      let literals = Object.values(signal.conversion.choices).map((value) =>
        factory.createLiteralTypeNode(factory.createStringLiteral(value))
      );
      return factory.createUnionTypeNode(literals);
    }
    return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);
  }

  private generateMultiplexVariantType(
    message: Message,
    multiplexName: string,
    index: number | string,
    signals: string[]
  ): TypeAliasDeclaration {
    let signal = message.getSignalByName(multiplexName);
    let discriminantNode: any;

    if (signal.conversion.choices) {
      let value = signal.conversion.choices[Number(index)]!;
      discriminantNode = factory.createStringLiteral(value);
    } else {
      discriminantNode = factory.createNumericLiteral(index.toString());
    }

    let members = [
      // Discriminant property
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier(multiplexName),
        undefined,
        factory.createLiteralTypeNode(discriminantNode)
      ),
      // Signal properties
      ...signals.map((signalName) => {
        let signal = message.signals.find((s) => s.name === signalName);
        if (!signal) throw new Error(`Signal ${signalName} not found`);

        let typeNode = this.generateSignalTypeNode(signal);
        return factory.createPropertySignature(
          undefined,
          factory.createIdentifier(signalName),
          undefined,
          typeNode
        );
      }),
    ];

    let variantTypeName = `${message.name}_${index}`;
    return factory.createTypeAliasDeclaration(
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      factory.createIdentifier(variantTypeName),
      undefined,
      factory.createTypeLiteralNode(members)
    );
  }

  private generateMultiplexUnionType(
    messageName: string,
    multiplexName: string,
    variants: string[]
  ): TypeAliasDeclaration {
    return factory.createTypeAliasDeclaration(
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      factory.createIdentifier(messageName),
      undefined,
      factory.createUnionTypeNode(
        variants.map((index) =>
          factory.createTypeReferenceNode(
            factory.createIdentifier(`${messageName}_${index}`),
            undefined
          )
        )
      )
    );
  }

  private generateMultiplexedTypes(
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
        this.generateMultiplexVariantType(
          message,
          multiplexName,
          index,
          signals.filter((s): s is string => typeof s === "string")
        )
      );
      types.push(...variantTypes);

      // Generate union type
      types.push(
        this.generateMultiplexUnionType(
          message.name,
          multiplexName,
          variants.map(([index]) => index)
        )
      );

      // Handle nested multiplexers
      variants.forEach(([_, signals]) => {
        let nestedTypes = this.generateMultiplexedTypes(
          message,
          signals.filter((s): s is SignalBranch => typeof s !== "string")
        );
        types.push(...nestedTypes);
      });
    }

    return types;
  }

  private generateNonMultiplexedType(
    message: Message
  ): TypeAliasDeclaration {
    let members = message.signals.map((signal) => {
      let typeNode = this.generateSignalTypeNode(signal);
      return factory.createPropertySignature(
        undefined,
        factory.createIdentifier(signal.name),
        undefined,
        typeNode
      );
    });

    return factory.createTypeAliasDeclaration(
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      factory.createIdentifier(message.name),
      undefined,
      factory.createTypeLiteralNode(members)
    );
  }

  private generateContainerType(messages: Message[]): TypeAliasDeclaration {
    let members = messages.map((message) =>
      factory.createPropertySignature(
        undefined,
        factory.createIdentifier(message.name),
        undefined,
        factory.createTypeReferenceNode(
          factory.createIdentifier(message.name),
          undefined
        )
      )
    );

    return factory.createTypeAliasDeclaration(
      [factory.createModifier(SyntaxKind.ExportKeyword)],
      factory.createIdentifier("Messages"),
      undefined,
      factory.createTypeLiteralNode(members)
    );
  }

  async generateTypes(messages: Message[]): Promise<void> {
    let allTypes: Array<TypeAliasDeclaration> = [];

    // Generate message types
    messages.forEach((message) => {
      if (message.isMultiplexed()) {
        let types = this.generateMultiplexedTypes(
          message,
          message.signalTree!
        );
        allTypes.push(...types);
      } else {
        allTypes.push(this.generateNonMultiplexedType(message));
      }
    });

    // Generate container type
    allTypes.push(this.generateContainerType(messages));

    // Generate output
    let outputs = allTypes.map((type) =>
      this.printer.printNode(EmitHint.Unspecified, type, this.sourceFile)
    );

    let finalOutput = outputs.join("\n\n");

    // Write to file
    if (!fs.existsSync(this.outputDir)) {
      await fs.promises.mkdir(this.outputDir, { recursive: true });
    }
    let outputPath = path.join(this.outputDir, "types.ts");
    await fs.promises.writeFile(outputPath, finalOutput);
  }
}
