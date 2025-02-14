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
    name?: string;
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
  const createElementWithProps: PropsOrChildren<Type> = (...propsOrChildren: any) => {
    let props = propsOrChildren;
    const inner = <Children extends Array<any>>(
      ...children: Children
    ): ElementType<Type, any, Children> => {
      return Object.assign({}, inner, { type, props, children, [elSym]: true });
    };

    return Object.assign(inner, { type, props, children: undefined, [elSym]: true });
  };

  return createElementWithProps;
};

type PropsOnly<Type extends keyof TypeToProps> = <const Props extends TypeToProps[Type]>(
  props: Props,
) => ElementType<Type, Props>;

type PropsOrChildren<Type extends keyof TypeToProps> = {
  <const Props extends TypeToProps[Type]>(props: Props): ElementType<Type, Props>;
  <const Children extends Array<{ [elSym]: boolean }>>(
    ...args: {} extends TypeToProps[Type] ? Children : never
  ): ElementType<Type, {}, Children>;
};

type InnerCreateElement<Type extends keyof TypeToProps> = {} extends TypeToProps[Type]
  ? PropsOrChildren<Type>
  : PropsOnly<Type>;

const createElementCurried4 = <Type extends keyof TypeToProps>(type: Type) => {
  const createElementWithProps: InnerCreateElement<Type> = (...propsOrChildren: any) => {
    let props = propsOrChildren;
    const inner = <Children extends Array<any>>(
      ...children: Children
    ): ElementType<Type, any, Children> => {
      return Object.assign({}, inner, { type, props, children, [elSym]: true });
    };

    return Object.assign(inner, { type, props, children: undefined, [elSym]: true });
  };

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
  let result = Message({ foobar: 'bar' })(
    Signal(
      Signal(), //
      Signal(),
    ),
    Message(
      Signal({ name: 'name' }), //
    ),
  );
  console.log(result);
});
