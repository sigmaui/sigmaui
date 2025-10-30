// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

// SVG JSX element
const emailOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8.63965L12.5625 13.7021C12.2231 13.9329 11.7769 13.9329 11.4375 13.7021L4 8.63965V17.25C4 17.6338 4.33545 17.9999 4.7998 18H19.2002C19.6646 17.9999 20 17.6338 20 17.25V8.63965ZM4.71484 6.00391C4.47392 6.0277 4.275 6.15224 4.14844 6.32129L12 11.665L19.8506 6.32129C19.724 6.15248 19.5259 6.02768 19.2852 6.00391L19.2002 6H4.7998L4.71484 6.00391ZM22 17.25C22 18.7911 20.7157 19.9999 19.2002 20H4.7998C3.28435 19.9999 2 18.7911 2 17.25V6.75C2 5.20891 3.28435 4.0001 4.7998 4H19.2002L19.4814 4.01367C20.8712 4.15222 22 5.30524 22 6.75V17.25Z" />
  </svg>
);

// Chuyển đổi SVG thành IconDefinition
const emailOutlinedIconDefinition = svgToIconDefinition(emailOutlinedSvg, 'email-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={emailOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EmailOutlinedIcon';
}

export default RefIcon;
