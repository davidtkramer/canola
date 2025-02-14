import { test } from 'vitest';

const symbol = Symbol('element');

type TypeToProps = {
  Message: {
    id: number;
    name: string;
  };
  Signal: {
    name?: string;
  };
};

type ElementTypeList = Array<{ [symbol]: boolean }>;

type ElementType<
  Type extends string,
  Props,
  Children extends ElementTypeList | null = null,
> = {
  type: Type;
  props: Props;
  children: Children;
  [symbol]: boolean;
  <_Children extends ElementTypeList>(
    ...children: _Children
  ): ElementType<Type, Props, _Children>;
};

type CreateElement = {
  <Type extends keyof TypeToProps>(type: Type): CreateElementInner<Type>;
};

type CreateElementInner<Type extends keyof TypeToProps> = {} extends TypeToProps[Type]
  ? PropsOptionalOrChildren<Type>
  : PropsRequired<Type>;

type PropsOptionalOrChildren<Type extends keyof TypeToProps> = {
  <const Props extends TypeToProps[Type]>(props: Props): ElementType<Type, Props>;
  <const Children extends ElementTypeList>(
    ...children: Children
  ): ElementType<Type, {}, Children>;
};

type PropsRequired<Type extends keyof TypeToProps> = {
  <const Props extends TypeToProps[Type]>(props: Props): ElementType<Type, Props>;
};

const createElement: CreateElement = (type) => {
  return (...propsOrChildren: any) => {
    let props =
      propsOrChildren.length === 1 && !propsOrChildren[0]?.[symbol]
        ? propsOrChildren[0]
        : {};

    let children =
      propsOrChildren.length >= 1 && propsOrChildren[0]?.[symbol]
        ? propsOrChildren
        : null;

    const withChildren = Object.assign(
      (...children: Array<any>) => {
        console.log(children);
        let foo = Object.assign({}, withChildren, { children });
        console.log(foo);
        return foo;
      },
      {
        type,
        props,
        children,
        [symbol]: true,
      },
    );
    return withChildren;
  };
};

const Message = createElement('Message');
const Signal = createElement('Signal');

type BuildMessageType<T extends ElementType<'Message', any, any>> = {
  id: T['props']['id'];
  name: T['props']['name'];
  signals: {
    [S in T['children'][number] as S['props']['name']]: number;
  };
};

test('curried createElement', () => {
  let result = Message({ id: 0x3c2, name: 'TestMessage' })(
    Signal({ name: 'name' }), //
    Signal({ name: 'foo' }),
  );
  type Result = BuildMessageType<typeof result>;
});
