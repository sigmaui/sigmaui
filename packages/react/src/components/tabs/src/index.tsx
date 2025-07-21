import React, { useMemo } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@microui-kit/with-styles';
import { Tabs } from '@ark-ui/react';

import { styles, type TabsProps } from 'packages/common/components/tabs/styles';

const SigmaTabs: FC<TabsProps> = ({
  prefixCls = 'sm-tabs',
  className,
  classes,
  options = [],
  rootProps = {}
}) => {
  const onValueChange = ({ value }) => {
    console.log('onValueChange', value)
  }

  const { lazyMount = true, unmountOnExit = true } = rootProps;

  const { triggers, contents } = useMemo(() => {
    const triggers = [];
    const contents = [];

    options.forEach(({ label, value, content }) => {
      const isLink = value.startsWith('/');

      const triggerProps = {
        className: classes?.trigger,
        value
      };

      if (isLink) {
        triggerProps.asChild = true;
        triggerProps.children = (
          <Link to={value}>
            {label}
          </Link>
        );
      } else {
        triggerProps.children = label
      }

      triggers.push((
        <Tabs.Trigger
          {...triggerProps}
        />
      ));

      if (content) {
        contents.push((
          <Tabs.Content
            value={value}
          >
            {content}
          </Tabs.Content>
        ))
      }
    })

    return {
      triggers,
      contents
    }
  }, [options]);

  return (
    <Tabs.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      defaultValue="preview"
      className={classNames(prefixCls, className, classes?.wrapper)}
      onValueChange={onValueChange}
    >
      <Tabs.List>
        {triggers}
      </Tabs.List>
      {contents}
    </Tabs.Root>
  )
}

SigmaTabs.displayName = 'Tabs';

export default withStyles<TabsProps>(styles)(SigmaTabs)