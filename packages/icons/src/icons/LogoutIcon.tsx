// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const logoutSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18.2227V5.77734C3.00011 5.04079 3.29264 4.33431 3.81348 3.81348C4.33431 3.29264 5.04079 3.00011 5.77734 3H9.33301L9.43555 3.00488C9.93983 3.05607 10.333 3.48221 10.333 4C10.333 4.51779 9.93983 4.94393 9.43555 4.99512L9.33301 5H5.77734C5.57122 5.00011 5.3733 5.08178 5.22754 5.22754C5.08178 5.3733 5.00011 5.57122 5 5.77734V18.2227C5.00011 18.4288 5.08178 18.6267 5.22754 18.7725C5.3733 18.9182 5.57122 18.9999 5.77734 19H9.33301L9.43555 19.0049C9.93983 19.0561 10.333 19.4822 10.333 20C10.333 20.5178 9.93983 20.9439 9.43555 20.9951L9.33301 21H5.77734C5.04079 20.9999 4.33431 20.7074 3.81348 20.1865C3.29264 19.6657 3.00011 18.9592 3 18.2227ZM14.8486 6.84863C15.2148 6.48248 15.7937 6.45982 16.1865 6.78027L16.2627 6.84863L20.707 11.293C21.0976 11.6835 21.0976 12.3165 20.707 12.707L16.2627 17.1514C15.8722 17.5419 15.2392 17.5419 14.8486 17.1514C14.4581 16.7608 14.4581 16.1278 14.8486 15.7373L17.5859 13H9.33301C8.78087 12.9998 8.33301 12.5522 8.33301 12C8.33301 11.4478 8.78087 11.0002 9.33301 11H17.5859L14.8486 8.2627L14.7803 8.18652C14.4598 7.79375 14.4825 7.21479 14.8486 6.84863Z" />
  </svg>
);

const logoutIconDefinition = svgToIconDefinition(logoutSvg, 'logout');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={logoutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LogoutIcon';
}

export default RefIcon;
