// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const removeMinusOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 10.62C19.8284 10.62 20.5 11.2916 20.5 12.12C20.5 12.9484 19.8284 13.62 19 13.62H5C4.17157 13.62 3.5 12.9484 3.5 12.12C3.5 11.2916 4.17157 10.62 5 10.62H19Z" />
  </svg>
);

const removeMinusOutlinedIconDefinition = svgToIconDefinition(
  removeMinusOutlinedSvg,
  'remove-minus-outlined'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={removeMinusOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RemoveMinusOutlinedIcon';
}

export default RefIcon;
