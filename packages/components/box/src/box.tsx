import React from 'react';

import { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import { ClassKeys, BoxBaseProps } from './types';
import styles from './styles';

const Box: React.FC<BoxBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <div {...props}>Box</div>;
};

Box.displayName = 'Box';

export default withStyles(styles)(Box);
