import type { FC } from 'react';
import type { ComponentForwardProps } from '@sigma-ui-kit/theme';
import { withStyles } from '@sigma-ui-kit/theme';
import Input from '@sigma-ui-kit/input';

import type { ClassKeys, InputPasswordBaseProps } from './types';
import styles from './styles';

const InputPassword: FC<InputPasswordBaseProps & ComponentForwardProps<ClassKeys>> = props => {
  return <Input {...props} />;
};

InputPassword.displayName = 'InputPassword';

export default withStyles(styles)(InputPassword);
