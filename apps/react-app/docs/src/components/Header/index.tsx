import React from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import { useRouter } from '@microui-kit/use-router';
import SegmentGroup from 'packages/react/src/components/segment-group/src';
import Menu from 'packages/react/src/components/menu/src';

import { routeMap } from '../../router/routeMap';

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
    <header
      className={classNames(prefixCls, className, classes?.wrapper)}
    >
      <div className={classes?.top}>
        <div className={classes?.logo}>
          <img alt="logo" src="/assets/images/logo.png"/>
        </div>
      </div>
      {
        isShowSegmentDocs
        &&
        <SegmentGroup
          defaultValue={pathname}
          direction="horizontal"
          options={[
            {
              label: 'Docs',
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
              marginTop: 6
            },
            horizontal: {
              gap: 24
            }
          }}
        />
      }
    </header>
  )
}

Header.displayName = 'Header';

export default withStyles<HeaderProps>(styles)(Header)