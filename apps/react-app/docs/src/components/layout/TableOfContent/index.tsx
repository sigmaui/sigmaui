import React, { useEffect } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import tocbot from 'tocbot';
import { withStyles } from '@microui-kit/with-styles';
import SegmentGroup from '@sigmaui-kit/segment-group';

import { type TableOfContentProps, styles } from './styles';

const TableOfContent: FC<TableOfContentProps> = ({
  prefixCls = 'sm-table-of-content',
  className,
  classes,
  entries,
  contentClassName,
}) => {
  const tocClassName = 'sm-toc';

  let renderToc: any = <div className={classNames(tocClassName, classes?.toc)}></div>;

  if (entries) {
    renderToc = (
      <SegmentGroup
        orientation="vertical"
        options={entries}
        valueName="slug"
        labelName="title"
      />
    );
  }

  useEffect(() => {
    if (contentClassName) {
      tocbot.init({
        tocSelector: `.${tocClassName}`,
        contentSelector: `.${contentClassName}`,
        headingSelector: 'h2, h3',
      });
    }
  }, [contentClassName]);

  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <div className={classes?.heading}>On this page</div>
      {renderToc}
    </div>
  );
};

TableOfContent.displayName = 'TableOfContent';

export default withStyles<TableOfContentProps>(styles)(TableOfContent);
