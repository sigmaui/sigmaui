import type { StyleFn } from '@sigma-ui-kit/theme';

import type { BadgeProps, SemanticName } from './types';

const styleFn: StyleFn<BadgeProps, SemanticName> = props => {
  const { tokens } = props;
  return {
    root: {
      root: {},
    },
    prefix: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    suffix: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    dot: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  };
};

export default styleFn;
