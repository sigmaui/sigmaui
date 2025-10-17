import React, { FC } from 'react';

import { ComponentForwardProps, withStyles } from '@sigma-ui-kit/theme';
import Input from '@sigma-ui-kit/input';

import { ClassKeys, InputPasswordBaseProps } from './types';
import styles from './styles';

const InputPassword: FC<InputPasswordBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <Input {...props} />;
};

InputPassword.displayName = 'InputPassword';

export default withStyles(styles)(InputPassword);
