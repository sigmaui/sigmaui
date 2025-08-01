import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'

import TableOfContent from '../TableOfContent'

import { styles, type DocPageProps } from './styles'

const DocPage: FC<DocPageProps> = ({
  prefixCls = 'sm-page',
  className,
  children,
  classes,
  data = {},
  isShowToc = true,
}) => {
  const { slug, title, description, toc } = data

  const contentClassName = 'sm-toc-content'

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <div className={classes?.main}>
        {title && (
          <div className={classes?.info}>
            <h1 className={classes?.title}>{title}</h1>
            {description && <p className={classes?.description}>{description}</p>}
          </div>
        )}
        <div className={classNames(contentClassName, classes?.content)}>{children}</div>
      </div>
      {(isShowToc || toc) && (
        <TableOfContent
          key={slug}
          entries={toc}
          contentClassName={contentClassName}
          _style={{
            wrapper: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: 150,
            },
          }}
        />
      )}
    </div>
  )
}

DocPage.displayName = 'DocPage'

export default withStyles<DocPageProps>(styles)(DocPage)
