import React from 'react';
import { withStyles } from '@tdm-ui/theme';
import { InputPasswordProps } from './types';

const InputPassword = React.forwardRef<HTMLDivElement, InputPasswordProps>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      InputPassword
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

export default withStyles((theme, props) => ({}))(InputPassword);
