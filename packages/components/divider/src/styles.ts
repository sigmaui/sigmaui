import type { StyleFn } from '@sigma-ui-kit/theme';

import type { DividerProps, ClassKeys } from './types';

const styles: StyleFn<DividerProps, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
