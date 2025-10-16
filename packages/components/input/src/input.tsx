import RcInput from '@rc-component/input';

import { withStyles } from '@tdm-ui/theme';
import { XMarkIcon } from '@tdm-ui/icons';

import { InputProps } from './types';

function Input(props: InputProps) {
  const { allowClear, ...rest } = props;

  const mergedAllowClear = allowClear === true ? { clearIcon: <XMarkIcon /> } : allowClear;

  return <RcInput {...rest} allowClear={mergedAllowClear} />;
}

Input.displayName = 'Input';

export default withStyles((theme, props) => ({}))(Input);
