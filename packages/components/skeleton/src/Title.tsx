import * as React from 'react';
import { classnames } from '@sigma-ui-kit/theme';

export interface SkeletonTitleProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
}

const Title: React.FC<SkeletonTitleProps> = ({ prefixCls, className, width, style }) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  <h3 className={classnames(prefixCls, className)} style={{ width, ...style }} />
);

export default Title;
