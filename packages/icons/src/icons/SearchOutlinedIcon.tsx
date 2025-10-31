// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const searchOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2227 11.1113C17.2227 7.73634 14.4863 5.00012 11.1113 5C7.73626 5 5 7.73626 5 11.1113C5.00012 14.4863 7.73634 17.2227 11.1113 17.2227C12.759 17.2226 14.2525 16.568 15.3516 15.5078C15.3744 15.4794 15.3994 15.4522 15.4258 15.4258C15.4522 15.3994 15.4794 15.3744 15.5078 15.3516C16.568 14.2525 17.2226 12.759 17.2227 11.1113ZM19.2227 11.1113C19.2226 12.9903 18.5802 14.7177 17.5078 16.0928L20.707 19.293L20.7754 19.3691C21.0957 19.7619 21.0731 20.3409 20.707 20.707C20.3409 21.0731 19.7619 21.0957 19.3691 20.7754L19.293 20.707L16.0928 17.5078C14.7177 18.5802 12.9903 19.2226 11.1113 19.2227C6.63177 19.2227 3.00012 15.5909 3 11.1113C3 6.63169 6.63169 3 11.1113 3C15.5909 3.00012 19.2227 6.63177 19.2227 11.1113Z" />
  </svg>
);

const searchOutlinedIconDefinition = svgToIconDefinition(searchOutlinedSvg, 'search-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={searchOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SearchOutlinedIcon';
}

export default RefIcon;
