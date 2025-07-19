import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import Tabs from 'packages/react/src/components/tabs/src';

import { styles, type ComponentPreviewProps } from './styles';

const ComponentPreview: FC<ComponentPreviewProps> = ({
  prefixCls = 'sm-component-preview',
  className,
  children,
  classes
}) => {
  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <Tabs
        options={[
          {
            label: 'Preview',
            value: 'preview',
            content: 'Preview'
          },
          {
            label: 'Code',
            value: 'code',
            content: 'Code'
          }
        ]}
      />
      {children}
    </div>
  )
}

ComponentPreview.displayName = 'ComponentPreview';

export default withStyles<ComponentPreviewProps>(styles)(ComponentPreview)