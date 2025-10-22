import type { StyleFn } from '@sigma-ui-kit/theme';

import type { BoxProps, ClassKeys } from './types';

const styles: StyleFn<BoxProps, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
