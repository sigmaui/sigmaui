import { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface BoxBaseProps {}

export type BoxProps = WithStyleProps<ClassKeys> & BoxBaseProps;
