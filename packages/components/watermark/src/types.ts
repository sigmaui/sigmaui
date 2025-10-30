import type { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface WatermarkBaseProps {}

export type WatermarkProps = WithStyleProps<ClassKeys> & WatermarkBaseProps;
