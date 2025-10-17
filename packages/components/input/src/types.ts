import { InputProps as RcInputProps } from '@rc-component/input';
import { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface InputBaseProps extends RcInputProps {}

export type InputProps = WithStyleProps<ClassKeys> & InputBaseProps;
