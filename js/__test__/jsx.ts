type MessageProps = {
  id: string;
  name: string;
  length: number;
};
type MessageElement<Signals> = {
  type: 'Message';
  attributes: MessageProps;
  children?: Array<SignalElement<Signals>>;
};
export function Message(
  props: MessageProps,
): <Signals>(...children: Array<SignalElement<Signals>>) => MessageElement<Signals> {
  console.log('Message');
  return <Signals>(...children: Array<SignalElement<Signals>>) => ({
    type: 'Message',
    attributes: props,
    children,
  });
}

type SignalProps<Name> = {
  name: Name;
  offset: number;
  length: number;
  children?: any;
};
type SignalElement<Name> = {
  type: 'Signal';
  attributes: SignalProps<Name>;
  children?: ValueElement;
};
export function Signal<const Name>(
  props: SignalProps<Name>,
): (children?: ValueElement) => SignalElement<Name> {
  console.log('Signal');
  return (children) => ({
    type: 'Signal',
    attributes: props,
    children,
  });
}

type ValueProps = {
  type: string;
  slope?: number;
  intercept?: number;
};
type ValueElement = {
  type: 'Value';
  attributes: ValueProps;
};
export function Value(props: ValueProps): ValueElement {
  console.log('Value');
  return {
    type: 'Value',
    attributes: props,
  };
}

// Type to extract signal names from a template string
type ExtractSignalNames<T extends string> =
  T extends `${string}<Signal name="${infer Name}"${string}>${string}</Signal>${infer Rest}`
    ? Name | ExtractSignalNames<Rest>
    : never;

// Template tag implementation
const message = <const T extends string>(strings: T): ExtractSignalNames<T> => {
  return {} as any;
};

let schema = message(`
  <Message id="0x123" name="TestMessage" length="8">
    <Signal name="signalA" offset="0" length="64">
      <Value type="double" />
    </Signal>
    <Signal name="signalB" offset="0" length="64">
      <Value type="double" />
    </Signal>
  </Message>
`);
