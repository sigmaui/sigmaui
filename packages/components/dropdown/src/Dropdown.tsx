import React from 'react';

import type { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';

import type { ClassKeys, DropdownBaseProps } from './types';
import styles from './styles';

const Dropdown: React.FC<DropdownBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <div {...props}>Dropdown</div>;
};

Dropdown.displayName = 'Dropdown';

export default withStyles(styles)(Dropdown);
