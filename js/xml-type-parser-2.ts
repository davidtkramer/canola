// Helper types for string manipulation
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : S;
type TrimRight<S extends string> = S extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? TrimRight<Rest>
  : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// Parse all attributes into an object
type ParseAttributes<S extends string> = ParseAttributesHelper<Trim<S>>;
// Main recursive type to parse attributes
type ParseAttributesHelper<S extends string, Acc = {}> = S extends ''
  ? Acc
  : S extends `${infer Key}="${infer Rest}`
    ? ParseAttributesHelper<
        GetRest<`"${Rest}`>,
        Acc & { [K in ExtractKey<`${Key}="`>]: ExtractValue<`"${Rest}`> }
      >
    : Acc;
// Get everything after the first closing quote and trim
type GetRest<S extends string> = S extends `"${infer _Value}"${infer Rest}`
  ? TrimLeft<Rest>
  : never;
// Extract the key before the equals sign
type ExtractKey<S extends string> = S extends `${infer Key}="${infer _Rest}`
  ? Key
  : never;
// Extract the value between quotes
type ExtractValue<S extends string> = S extends `"${infer Value}"${infer _Rest}`
  ? Value
  : never;

// Parse children between opening and closing tags
type ParseChildren<
  T extends string,
  TagName extends string,
> = T extends `${infer Content}</${TagName}>${infer Rest}`
  ? { children: ParseXML<Trim<Content>>; rest: Rest }
  : never;

type ParseXML<T extends string> = T extends ''
  ? []
  : // has attributes?
    T extends `<${infer TagName} ${infer Rest}`
    ? // maybe?
      Rest extends `${infer Attrs}>${infer Content}`
      ? // yes
        [
          {
            type: TagName;
            attributes: ParseAttributes<Attrs>;
            children: ParseChildren<Content, TagName>['children'];
          },
        ]
      : // no: syntax error
        [{ error: `Expected closing > for ${TagName}, got: ${Rest}` }]
    : // no attributes
      T extends `<${infer TagName}>${infer Rest}`
      ? [TagName, Rest]
      : [{ error: `Invalid syntax: ${T}` }];

// Helper function to maintain type inference
const message = <T extends string>(xml: T): ParseXML<Trim<T>> => {
  return xml as any;
};

// Example usage:
const schema = message(`
  <Message id="0x123" name="TestMessage" length="8">
    <Signal name="signal" offset="0" length="64">
      <Value type="double" />
    </Signal>
  </Message>
`);
type SchemaType = (typeof schema)[0]['children'][0]['children'];
