import React from 'react';

import type { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import type { ClassKeys, WatermarkBaseProps } from './types';
import styles from './styles';

const Watermark: React.FC<WatermarkBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <div {...props}>Watermark</div>;
};

Watermark.displayName = 'Watermark';

export default withStyles(styles)(Watermark);
