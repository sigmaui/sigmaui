import React from 'react'
import type { FC } from 'react'
import _jsx_runtime from 'react/jsx-runtime'
import ReactDOM from 'react-dom';
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import type { MDXComponents as TMDXComponents } from 'mdx/types';

import { MDXComponents } from '@docs/components/mdx'

import { styles, type MDXContentProps } from './styles'

type MDXComponentProps = {
  [props: string]: unknown;
  components?: TMDXComponents;
};

export const getMDXComponent = (
  code: string,
  globals: Record<string, unknown> = {},
): React.FC<MDXComponentProps> => {
  const scope = { React, ReactDOM, _jsx_runtime, ...globals };
  const fn = new Function(...Object.keys(scope), code);

  return fn(...Object.values(scope)).default;
};

export const useMDXComponent = (code: string, globals: Record<string, unknown> = {}) => {
  return React.useMemo(() => getMDXComponent(code, globals), [code, globals]);
};

const MDXContent: FC<MDXContentProps> = ({
  prefixCls = 'sm-mdx-content',
  className,
  classes,
  code
}) => {
  const Component = useMDXComponent(code)

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <Component
        components={{
          ...MDXComponents
        }}
      />
    </div>
  )
}

MDXContent.displayName = 'MDXContent'

export default withStyles<MDXContentProps>(styles)(MDXContent)
