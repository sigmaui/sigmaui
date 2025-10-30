import type { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface NotificationBaseProps {}

export type NotificationProps = WithStyleProps<ClassKeys> & NotificationBaseProps;
