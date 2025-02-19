export function h(type: h.JSX.ElementType, props: object, ...children: Array<any>) {
  return {
    type,
    props: props ?? {},
    children,
  };
}

h.Fragment = 'fragment' as const;

export namespace h.JSX {
  export type Element = { type: ElementType; props: any; children: Array<any> };
  export type ElementType = keyof IntrinsicElements;
  export interface IntrinsicElements {
    networkdefinition: {};
    bus: {
      name?: string;
    };
    message: {
      id?: number;
      name?: string;
      length: number;
    };
    signal: {
      name: string;
      offset: number;
      length: number;
      endianess?: 'little' | 'big';
    };
    value: {
      type?: 'single' | 'double' | 'signed';
      slope?: number;
      intercept?: number;
      min?: number;
      max?: number;
      unit?: string;
    };
    labelset: {};
    label: {
      name: string;
      value: number;
    };
    multiplex: {
      name: string;
      offset: number;
      length: number;
    };
    muxgroup: {
      count: number;
    };
    fragment: {};
  }
}

let tagMap = {
  fragment: undefined,
  networkdefinition: 'NetworkDefinition',
  bus: 'Bus',
  message: 'Message',
  signal: 'Signal',
  value: 'Value',
  labelset: 'LabelSet',
  label: 'Label',
  multiplex: 'Multiplex',
  muxgroup: 'MuxGroup',
};
export function createRoot(defaultMessageSchemaName: string = '') {
  function render(node: h.JSX.Element) {
    if (node.type === 'fragment') {
      let xml = '';
      for (let child of node.children) {
        xml += render(child);
      }
      return xml;
    }

    if (node.type === 'message') {
      let props = node.props;
      props.name = props.name ?? defaultMessageSchemaName;
      props.id = '0x' + Number(props.id ?? 0x123).toString(16);
    }

    let tag = tagMap[node.type];
    let xml = `<${tag}`;

    for (let [name, value] of Object.entries(node.props)) {
      xml += ` ${name}="${value}"`;
    }

    if (node.children.length > 0) {
      xml += '>';
      for (let child of node.children) {
        xml += render(child);
      }
      return xml + `</${tag}>`;
    } else {
      return xml + ' />';
    }
  }

  return { render };
}
