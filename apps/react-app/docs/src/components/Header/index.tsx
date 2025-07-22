import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import { useRouter } from '@microui-kit/use-router';
import SegmentGroup from '@sigmaui-kit/segment-group';
import Menu from '@sigmaui-kit/menu';

import { routeMap } from '@docs/router/routeMap';

import { styles, type HeaderProps } from './styles';

const Header: FC<HeaderProps> = ({
  prefixCls = 'sm-header',
  className,
  classes
}) => {
  const router = useRouter();
  const { pathname } = router;
  const isShowSegmentDocs = pathname.startsWith('/docs');

  return (
    <div
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <div className={classes?.top}>
        <div className={classes?.left}>
          <div className={classes?.logo}>
            <img alt="logo" src="/assets/images/logo.png"/>
          </div>
          <Menu
            orientation="horizontal"
            options={[
              {
                label: 'Docs',
                value: routeMap.introductionPath
              },
              {
                label: 'Playground',
                value: routeMap.playgroundPath
              },
              {
                label: 'Blogs',
                value: routeMap.blogPath
              }
            ]}
          />
        </div>
      </div>
      {
        isShowSegmentDocs
        &&
        <SegmentGroup
          defaultValue={pathname}
          orientation="horizontal"
          options={[
            {
              label: 'Get Started',
              value: routeMap.introductionPath
            },
            {
              label: 'Components',
              value: routeMap.componentPath
            },
            {
              label: 'Blocks',
              value: routeMap.blockPath
            },
            {
              label: 'Charts',
              value: routeMap.chartPath
            },
            {
              label: 'Templates',
              value: routeMap.templatePath
            }
          ]}
          _style={{
            wrapper: {
              marginTop: 6,
              gap: 24
            }
          }}
        />
      }
    </div>
  )
}

Header.displayName = 'Header';

export default withStyles<HeaderProps>(styles)(Header)