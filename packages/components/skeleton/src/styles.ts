import type { StyleFn } from '@sigma-ui-kit/theme';

import type { SkeletonProps, SematicName } from './types';

const styles: StyleFn<SkeletonProps, SematicName> = props => {
  const { tokens } = props;
  return {
    root: { root: {} },
  };
};

export default styles;
