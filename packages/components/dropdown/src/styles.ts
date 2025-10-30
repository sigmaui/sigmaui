import type { StyleFn } from '@sigma-ui-kit/theme';

import type { DropdownProps, ClassKeys } from './types';

const styles: StyleFn<DropdownProps, ClassKeys> = props => {
  const { tokens } = props;
  return {
    root: {},
  };
};

export default styles;
