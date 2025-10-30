import React from 'react';
import { classnames, useDefaultProps } from '@sigma-ui-kit/theme';

import type { SematicName, TextProps } from './types';
import styleFn from './styles';

const componentName = 'Text';

const Text = React.forwardRef<HTMLDivElement, TextProps>((inProps, ref) => {
  const { classes, prefixCls, rootPrefixCls, variant, className, ...rest } = useDefaultProps<
    SematicName,
    TextProps
  >({
    props: inProps,
    defaultProps: { variant: 'text-md' },
    name: componentName,
    styleFn,
  });
  return (
    <p
      className={classnames(
        prefixCls,
        classes.root,
        variant && `${prefixCls}-${variant}`,
        className
      )}
      ref={ref}
      {...rest}
    >
      Text
    </p>
  );
});

if (process.env.NODE_ENV !== 'production') {
  Text.displayName = componentName;
}

export default Text;
