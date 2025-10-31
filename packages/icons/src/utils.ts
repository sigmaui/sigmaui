'use client';

import React, { useContext, useEffect } from 'react';
import type { CSSProperties, MouseEventHandler, MutableRefObject, ReactNode } from 'react';
import { updateCSS } from '@rc-component/util/lib/Dom/dynamicCSS';
import { getShadowRoot } from '@rc-component/util/lib/Dom/shadow';

import IconContext from './components/Context';

export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}
export interface IconDefinition {
  name: string;
  icon: AbstractNode;
}

function camelCase(input: string) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}

export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  );
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}

export type Attrs = Record<string, string>;
interface RootProps {
  onClick?: MouseEventHandler<Element>;
  style?: CSSProperties;
  ref: MutableRefObject<any>;
  [props: string]:
    | string
    | number
    | ReactNode
    | MouseEventHandler<Element>
    | CSSProperties
    | MutableRefObject<any>;
}

export function generate(node: AbstractNode, key: string, rootProps?: RootProps | false): any {
  if (!rootProps) {
    return React.createElement(
      node.tag,
      { key, ...normalizeAttrs(node.attrs) },
      (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`))
    );
  }

  return React.createElement(
    node.tag,
    {
      key,
      ...normalizeAttrs(node.attrs),
      ...rootProps,
    },
    (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`))
  );
}

export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

export const iconStyles = `
.smicon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.smicon > * {
  line-height: 1;
}

.smicon svg {
  display: inline-block;
  vertical-align: inherit;
}

.smicon::before {
  display: none;
}

.smicon .smicon-icon {
  display: block;
}

.smicon[tabindex] {
  cursor: pointer;
}

.smicon-spin::before,
.smicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

export const useInsertStyles = (eleRef: React.RefObject<HTMLElement>) => {
  const { csp, prefixCls, layer } = useContext(IconContext);
  let mergedStyleStr = iconStyles;

  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/smicon/g, prefixCls);
  }

  if (layer) {
    mergedStyleStr = `@layer ${layer} {\n${mergedStyleStr}\n}`;
  }

  useEffect(() => {
    const ele = eleRef.current;
    const shadowRoot = getShadowRoot(ele as Node);

    updateCSS(mergedStyleStr, '@sigma-ui-icons', {
      prepend: !layer,
      csp,
      attachTo: shadowRoot,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * Convert from SVG JSX to IconDefinition
 * @param svgElement - React element SVG
 * @param iconName - Icon name
 * @returns IconDefinition object
 */
export function svgToIconDefinition(
  svgElement: React.ReactElement<React.SVGProps<SVGSVGElement>>,
  iconName: string
): IconDefinition {
  const { children, ...svgProps } = svgElement.props;

  const sanitizeAttrs = (input: Record<string, any>): Attrs => {
    const attrs: Attrs = {};
    Object.keys(input).forEach(key => {
      const val = (input as any)[key];
      if (val == null) return;
      const t = typeof val;
      if (t === 'string' || t === 'number') {
        attrs[key] = String(val);
      }
      // ignore booleans, objects, functions (React-specific or non-serializable)
    });
    return attrs;
  };

  const svgNode: AbstractNode = {
    tag: 'svg',
    attrs: {
      ...sanitizeAttrs(svgProps),
      viewBox: String(svgProps.viewBox || '0 0 24 24'),
      fill: String(svgProps.fill || 'none'),
      xmlns: String(svgProps.xmlns || 'http://www.w3.org/2000/svg'),
    },
    children: [],
  };

  if (children) {
    const processChildren = (children: React.ReactNode): AbstractNode[] => {
      return React.Children.toArray(children)
        .map(child => {
          if (React.isValidElement(child)) {
            const { children: childChildren, ...childProps } = child.props;

            const node: AbstractNode = {
              tag: child.type as string,
              attrs: sanitizeAttrs(childProps),
              children: childChildren ? processChildren(childChildren) : undefined,
            };

            return node;
          }
          return null;
        })
        .filter(Boolean) as AbstractNode[];
    };

    svgNode.children = processChildren(children);
  }

  return {
    name: iconName,
    icon: svgNode,
  };
}
