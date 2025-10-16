import React from 'react';
import { withStyles } from '@sigma-ui-kit/theme';
import Input from '@sigma-ui-kit/input';
import { InputPasswordProps } from './types';

const InputPassword = React.forwardRef<HTMLDivElement, InputPasswordProps>((props, ref) => {
  return <Input />;
});

InputPassword.displayName = 'InputPassword';

export default withStyles((theme, props) => ({}))(InputPassword);
