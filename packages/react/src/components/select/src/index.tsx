import React from 'react';
import type { FC } from 'react';
import { Select } from '@ark-ui/react/select';
import { withStyleX } from '../../../hooks/with-stylex/src';

import type { SelectProps } from './types.ts';
import type { StylesType } from './xStyles';

import xStyles from './xStyles';

const Select: FC<SelectProps<StylesType>> = ({
  className,
  children,
  classes
}) => {
  return (
    <Select.Root className={className}>
      {children}
    </Select.Root>
  )
}

export default withStyleX(xStyles)(Select)