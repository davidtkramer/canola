// Trim whitespace from start of string
type TrimStart<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimStart<Rest>
  : S;

// Trim whitespace from end of string
type TrimEnd<S extends string> = S extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? TrimEnd<Rest>
  : S;

// Trim whitespace from both ends
type Trim<S extends string> = TrimStart<TrimEnd<S>>;

// Main entry point type
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
  ? TrimStart<Rest>
  : never;
// Extract the key before the equals sign
type ExtractKey<S extends string> = S extends `${infer Key}="${infer _Rest}`
  ? Key
  : never;
// Extract the value between quotes
type ExtractValue<S extends string> = S extends `"${infer Value}"${infer _Rest}`
  ? Value
  : never;

// Test cases
type Result1 = ParseAttributes<'  id="0x123"     name="TestMessage"   length="8" '>;
type Result2 = ParseAttributes<`
  id="0x123"
  name="TestMessage"
  length="8"


`>;
