import type { StyleFn } from '@sigma-ui-kit/theme';
import type { JSX } from 'react/jsx-runtime';

import type { BoxProps, SemanticName } from './types';

const styleFn: StyleFn<BoxProps<keyof JSX.IntrinsicElements>, SemanticName> = () => {
  return {
    root: {
      root: {},
    },
  };
};

export default styleFn;
