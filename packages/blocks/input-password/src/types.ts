import { InputBaseProps } from '@sigma-ui-kit/input';
import { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface InputPasswordBaseProps extends InputBaseProps {}

export type InputPasswordProps = WithStyleProps<ClassKeys> & InputPasswordBaseProps;
