import type { StyleFn } from '@sigma-ui-kit/theme';

import type { NotificationProps, ClassKeys } from './types';

const styles: StyleFn<NotificationProps, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
