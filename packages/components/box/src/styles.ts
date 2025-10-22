import type { StyleFn } from '@sigma-ui-kit/theme';
import type { JSX } from 'react/jsx-runtime';

import type { BoxBaseProps, ClassKeys } from './types';

const styles: StyleFn<BoxBaseProps<keyof JSX.IntrinsicElements>, ClassKeys> = () => {
  return {
    root: {},
  };
};

export default styles;
