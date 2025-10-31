// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const removeOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8ZM9 16V12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16ZM13 16V12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16ZM14 5C14 4.4478 13.5522 4.00013 13 4H11C10.4477 4 10 4.44772 10 5V6H14V5ZM16 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H8V5C8 3.34315 9.34315 2 11 2H13C14.6567 2.00013 16 3.34323 16 5V6Z" />
  </svg>
);

const removeOutlinedIconDefinition = svgToIconDefinition(removeOutlinedSvg, 'remove-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={removeOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RemoveOutlinedIcon';
}

export default RefIcon;
