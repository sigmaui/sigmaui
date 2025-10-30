import type { StyleFn } from '@sigma-ui-kit/theme';

import type { WatermarkProps, ClassKeys } from './types';

const styles: StyleFn<WatermarkProps, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
