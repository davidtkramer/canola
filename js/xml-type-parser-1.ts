// Helper types for string manipulation
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : S;
type TrimRight<S extends string> = S extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? TrimRight<Rest>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// Parse attribute value, converting to appropriate type
type ParseAttrValue<T extends string> = T extends `"${infer Value}"`
  ? Value
  : T extends `'${infer Value}'`
    ? Value
    : T extends `${infer N extends number}`
      ? N
      : T;

// Parse a single attribute (name="value" or name='value')
type ParseAttribute<T extends string> =
  T extends `${infer Name}="${infer Value}"${infer Rest}`
    ? { name: Name; value: ParseAttrValue<`"${Value}"`>; rest: Rest }
    : T extends `${infer Name}='${infer Value}'${infer Rest}`
      ? { name: Name; value: ParseAttrValue<`'${Value}'`>; rest: Rest }
      : never;

// Parse all attributes into an object
type ParseAttributes<
  T extends string,
  Acc extends Record<string, any> = {},
> = T extends ` ${infer Rest}`
  ? ParseAttributes<Rest, Acc>
  : T extends `${infer Attr} ${infer Rest}`
    ? ParseAttribute<Attr> extends {
        name: infer N extends string;
        value: infer V;
        rest: infer R extends string;
      }
      ? ParseAttributes<`${R} ${Rest}`, Acc & { [K in N]: V }>
      : Acc
    : T extends `${infer Attr}>`
      ? ParseAttribute<Attr> extends { name: infer N extends string; value: infer V }
        ? Acc & { [K in N]: V }
        : Acc
      : Acc;

// Parse the tag name
type ParseTagName<T extends string> = T extends `<${infer Name}${infer Rest}`
  ? Name
  : never;

// Parse children between opening and closing tags
type ParseChildren<
  T extends string,
  TagName extends string,
> = T extends `${infer Content}</${TagName}>${infer Rest}`
  ? { children: ParseXML<Trim<Content>>; rest: Rest }
  : never;

// Main recursive type for parsing XML
type ParseXML<T extends string> = T extends ''
  ? []
  : T extends `<${infer TagName} ${infer Rest}`
    ? Rest extends `${infer Attrs}>${infer Content}`
      ? [
          {
            type: TagName;
            attributes: ParseAttributes<Attrs>;
            children: ParseChildren<Content, TagName>['children'];
          },
          ...ParseXML<ParseChildren<Content, TagName>['rest']>,
        ]
      : []
    : [];

// Message template literal type
type Message<T extends string> = ParseXML<Trim<T>>;

// Helper function to maintain type inference
const message = <T extends string>(xml: T): Message<T> => {
  throw new Error('This function is only for type inference');
};

// Example usage:
const schema = message(`<Message id="0x123" name="TestMessage" length="8"></Message>   `);

// Type of schema will be inferred as the parsed XML structure
type SchemaType = typeof schema;
