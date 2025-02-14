import { test } from 'vitest';

const symbol = Symbol('element');

type TypeToProps = {
  Message: {
    foobar: 'foo' | 'bar' | 'foobar';
  };
  Signal: {
    name?: string;
  };
};

type ElementTypeList = Array<{ [symbol]: boolean }>;

type ElementType<Type extends string, Props, Children = undefined> = {
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
    let props = propsOrChildren;

    const withChildren = Object.assign(
      (...children: Array<any>) => {
        return Object.assign({}, withChildren, { children });
      },
      {
        type,
        props,
        children: undefined,
        [symbol]: true,
      },
    );
    return withChildren;
  };
};

const Message = createElement('Message');
const Signal = createElement('Signal');

test('curried createElement', () => {
  let result = Message({ foobar: 'bar' })(
    Message({ foobar: 'bar' })(
      Signal({ name: 'name' }), //
    ),
  );
  console.log(result);
});
