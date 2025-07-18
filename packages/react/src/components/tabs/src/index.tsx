import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import { Tabs, useTabs } from '@ark-ui/react';

import { styles, type TabsProps } from 'packages/common/components/tabs/styles';

const SigmaTabs: FC<TabsProps> = ({
  prefixCls = 'sm-tabs',
  className,
  children,
  classes,
  options = []
}) => {
  const tabs = useTabs();

  console.log('tabs', tabs);

  const onValueChange = (e) => {

  }

  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          {
            options.map(({ label, value }) => {
              return (
                <Tabs.Trigger
                  className={classes?.trigger}
                  value={value}
                >
                  {label}
                </Tabs.Trigger>
              )
            })
          }
        </Tabs.List>
      </Tabs.RootProvider>
    </div>
  )
}

SigmaTabs.displayName = 'Tabs';

export default withStyles<TabsProps>(styles)(SigmaTabs)