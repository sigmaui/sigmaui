import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import TableOfContent from '../TableOfContent'

import { styles, type DocPageProps } from './styles'

const DocPage: FC<DocPageProps> = ({ prefixCls = 'sm-page', className, children, classes, data = {} }) => {
  const { title, description, toc } = data;

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <div className={classes?.main}>
        <div className={classes?.info}>
          <h1 className={classes?.title}>{title}</h1>
          {
            description
            &&
            <p className={classes?.description}>{description}</p>
          }
        </div>
        <div className={classes?.content}>
          {children}
        </div>
      </div>
      {
        toc
        &&
        <TableOfContent
          entries={toc}
          _style={{
            wrapper: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: 150,
            },
          }}
        />
      }
    </div>
  )
}

DocPage.displayName = 'DocPage'

export default withStyles<DocPageProps>(styles)(DocPage)
