// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const laptopMobileOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1104 16.4053C17.6148 16.4563 18.0088 16.8825 18.0088 17.4004C18.0086 17.9181 17.6147 18.3435 17.1104 18.3945L17.0088 18.4004H17C16.4478 18.4004 16.0002 17.9525 16 17.4004C16 16.8481 16.4477 16.4004 17 16.4004H17.0088L17.1104 16.4053Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2861 8C20.8303 8.00023 21.9999 9.30016 22 10.7998V19.2002C21.9999 20.6998 20.8303 21.9998 19.2861 22H14.7139C13.2661 21.9998 12.1478 20.8571 12.0137 19.4785L12 19.2002V10.7998C12.0001 9.30016 13.1697 8.00024 14.7139 8H19.2861ZM14.7139 10C14.365 10.0002 14.0001 10.3117 14 10.7998V19.2002L14.0039 19.2891C14.0451 19.7258 14.3866 19.9998 14.7139 20H19.2861C19.635 19.9998 19.9999 19.6883 20 19.2002V10.7998C19.9999 10.3117 19.635 10.0002 19.2861 10H14.7139Z"
    />
    <path d="M9 18C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20H3C2.70833 20 2.46875 19.9062 2.28125 19.7188C2.09375 19.5312 2 19.2917 2 19C2 18.7083 2.09375 18.4688 2.28125 18.2812C2.46875 18.0938 2.70833 18 3 18H9Z" />
    <path d="M21 4C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H4V15H9C9.55228 15 10 15.4477 10 16C10 16.5523 9.55228 17 9 17H4C3.4375 16.9792 2.96875 16.7812 2.59375 16.4062C2.21875 16.0312 2.02083 15.5625 2 15V6C2.02083 5.4375 2.21875 4.96875 2.59375 4.59375C2.96875 4.21875 3.4375 4.02083 4 4H21Z" />
  </svg>
);

const laptopMobileOutlinedIconDefinition = svgToIconDefinition(
  laptopMobileOutlinedSvg,
  'laptop-mobile-outlined'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={laptopMobileOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LaptopMobileOutlinedIcon';
}

export default RefIcon;
