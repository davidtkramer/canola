type Elements = typeof Message | typeof Signal | typeof Value;

export namespace h.JSX {
  export type Element = ReturnType<Elements>;
  export type ElementType = Elements;
  export interface IntrinsicElements { }
}

export function h<E extends Elements>(Element: E, props: Parameters<E>[0], ...children: any): ReturnType<Elements> {
  console.log('h', Element, props, children);
  return Element({ ...props, children } as any);
}

type MessageProps = {
  id: string;
  name: string;
  length: string;
  children?: any;
}
export function Message(props: MessageProps, children?: Array<any>) {
  return { foo: 'hello' };
}

type SignalProps = {
  name: string;
  offset: string;
  length: string;
  children?: any;
}
export function Signal(props: SignalProps, children?: Array<any>) {
  return props;
}

type ValueProps = {
  type: string;
  slope?: string;
  intercept?: string;
  children?: any;
}
export function Value(props: ValueProps) {
  return props;
}


