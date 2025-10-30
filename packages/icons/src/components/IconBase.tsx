import * as React from 'react';

import { generate, isIconDefinition, useInsertStyles } from '../utils';
import type { AbstractNode, IconDefinition } from '../utils';

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<Element>;
  style?: React.CSSProperties;
  focusable?: string;
}

const IconBase: React.FC<IconProps> = props => {
  const { icon, className, onClick, style, ...restProps } = props;

  const svgRef = React.useRef<HTMLElement>(null);

  useInsertStyles(svgRef);

  if (!isIconDefinition(icon)) {
    return null;
  }

  let target = icon;
  if (target && typeof target.icon === 'function') {
    target = {
      ...target,
    };
  }

  // eslint-disable-next-line react-hooks/refs
  return generate(target.icon as AbstractNode, `svg-${target.name}`, {
    className,
    onClick,
    style: style || {},
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    ...restProps,
    ref: svgRef,
  });
};

IconBase.displayName = 'IconReact';

export default IconBase;
