import { expect, test } from 'vitest';

const elSym = Symbol('element');

type ElementType<Type extends string, Props, Children = undefined> = {
  type: Type;
  props: Props;
  children: Children;
  [elSym]: boolean;
  <_Children extends Array<any>>(
    ...children: _Children
  ): ElementType<Type, Props, _Children>;
};

function createElement<
  Type extends string,
  const Props extends object,
  Children extends Array<any>,
>(type: Type, props: Props, ...children: Children) {
  return {
    type,
    props,
    children,
  };
}

const h = createElement;

type TypeToProps = {
  Message: {
    foobar: 'foo' | 'bar' | 'foobar';
  };
  Signal: {
    name: string;
  };
};

const createElementCurried =
  <Type extends keyof TypeToProps>(type: Type) =>
  <const Props extends TypeToProps[Type], Children extends Array<any>>(
    props: Props,
    ...children: Children
  ) => {
    return {
      type,
      props,
      children,
    };
  };

const createElementCurried2 =
  <Type extends keyof TypeToProps>(type: Type) =>
  <const Props extends TypeToProps[Type]>(props: Props): ElementType<Type, Props> => {
    const inner = <Children extends Array<any>>(
      ...children: Children
    ): ElementType<Type, Props, Children> => {
      return Object.assign({}, inner, { type, props, children, [elSym]: true });
    };
    return Object.assign(inner, { type, props, children: undefined, [elSym]: true });
  };

const createElementCurried3 = <Type extends keyof TypeToProps>(type: Type) => {
  function createElementWithProps<const Props extends TypeToProps[Type]>(
    props: Props,
  ): ElementType<Type, Props>;
  function createElementWithProps<const Children extends Array<{ [elSym]: boolean }>>(
    ...args: {} extends TypeToProps[Type] ? Children : never
  ): ElementType<Type, {}, Children>;
  function createElementWithProps(...propsOrChildren: any): ElementType<Type, any, any> {
    let props = propsOrChildren;
    const inner = <Children extends Array<any>>(
      ...children: Children
    ): ElementType<Type, any, Children> => {
      return Object.assign({}, inner, { type, props, children, [elSym]: true });
    };
    return Object.assign(inner, { type, props, children: undefined, [elSym]: true });
  }
  return createElementWithProps;
};

const Message = createElementCurried3('Message');
const Signal = createElementCurried3('Signal');

test('regular createElement', () => {
  // prettier-ignore
  let result = h('Message', { foo: 'bar' },
    h('Signal', { name: 'signalA' }),
    h('Signal', { name: 'signalA' }),
  );
  console.log(result);
});

test('curried createElement', () => {
  // prettier-ignore
  let result = Message({ foobar: 'bar' })(
    Signal({ name: 'signalA' }),
    Signal({ name: 'signalB' }),
    Message({ foobar: 'bar' })(
      Signal({ name: 'name'})
    )
  );
  console.log(result);
});

test('foo', () => {});

type fooprops = { fooooooo: 'a' | 'b' };
function foo<const props extends fooprops>(props: props): any;
function foo(...args: Array<{ [elSym]: boolean }>): any;
function foo(props: any) {}

foo({ fooooooo: 'a' });
