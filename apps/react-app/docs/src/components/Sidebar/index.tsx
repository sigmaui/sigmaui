import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import { useRouter } from '@microui-kit/use-router';
import Menu from 'packages/react/src/components/menu/src';

import { routeMap } from '../../router/routeMap';

import { styles, type SidebarProps } from './styles';

const Sidebar: FC<SidebarProps> = ({
  prefixCls = 'sm-sidebar',
  className,
  classes
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <Menu
        direction="vertical"
        options={[
          {
            label: 'Get Started',
            options: [
              {
                label: 'Introduction',
                value: routeMap.introductionPath
              },
              {
                label: 'Installation',
                value: routeMap.installationPath
              }
            ]
          },
          {
            label: 'Components',
            options: [
              {
                label: 'Box',
                value: routeMap.component.box
              },
              {
                label: 'Button',
                value: routeMap.component.button
              }
            ]
          }
        ]}
      />
    </div>
  )
}

Sidebar.displayName = 'Sidebar';

export default withStyles<SidebarProps>(styles)(Sidebar)