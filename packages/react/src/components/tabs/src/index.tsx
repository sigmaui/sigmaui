import React, { useMemo } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcTabs from '@rc-component/tabs';
import { withStyles } from '@sigmaui-kit/with-styles';
import { getRestProps } from '@microui-kit/helpers';

import { styles, type TabsProps } from './styles';

const Tabs: FC<TabsProps> = ({
  prefixCls,
  className,
  classes,
  options = [],
  ...tabsProps
}) => {
  const restProps = getRestProps(tabsProps);

  const onChange = (value: string | number) => {
    console.log('onChange', value)
  }

  const items = useMemo(() => {
    return options.map(({ label, value, content }) => {
      const isLink = value.startsWith('/')

      return {
        label,
        key: value,
        children: content
      }
    })
  }, [options])

  return (
    <RcTabs
      destroyOnHidden
      prefixCls={prefixCls}
      className={classNames(className, classes?.wrapper)}
      classNames={classes}
      items={items}
      onChange={onChange}
      {...restProps}
    />
  )
}

Tabs.displayName = 'Tabs';

export default withStyles<TabsProps>(styles)(Tabs)