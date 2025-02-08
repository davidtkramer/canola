type CallableElementType<Props extends object> = {
  props: Props;
  children: null;
} & ChildBuilder<Props>;

type ChildBuilder<Props> = <
  InnerProps extends object,
  InnerChildren,
  Children extends Array<ElementType<InnerProps, InnerChildren>>,
>(
  ...children: Children
) => ElementType<Props, Children>;

type ElementType<Props, Children> = {
  props: Props;
  children: Children;
};

function Element<const Props extends object>(props: Props): CallableElementType<Props> {
  let inner: ChildBuilder<Props> = (...children) => ({ props, children });
  return Object.assign(inner, { props, children: null });
}

export function $<T>(arg: T): T {
  return arg;
}

type MessageProps = {
  id: number;
  name: string;
  length: number;
};
export function Message(props: MessageProps) {
  return Element(props);
}

type SignalProps<Name> = {
  name: Name;
  offset: number;
  length: number;
};
export function Signal<Name extends string>(props: SignalProps<Name>) {
  return Element(props);
}

type ValueProps = {
  type: string;
  slope?: number;
  intercept?: number;
};
export function Value(props: ValueProps) {
  return Element(props);
}

export let LabelSet: ChildBuilder<{}> = (...children) => {
  return Element({})(...children);
};

type LabelProps<Name> = {
  name: Name;
  value: number;
};
export function Label<Name extends string>(props: LabelProps<Name>) {
  return Element(props);
}
