// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const securityShieldHalvedFilledSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7285 2.15763C11.9358 2.09911 12.1578 2.1088 12.3604 2.18693L19.3604 4.88615C19.7458 5.03504 20 5.40648 20 5.81974V12.1195C19.9998 15.2542 17.9819 17.7564 16.1689 19.3881C15.2436 20.2208 14.3226 20.8717 13.6348 21.3139C13.2899 21.5355 13.0009 21.7069 12.7959 21.8236C12.6935 21.882 12.6112 21.9264 12.5537 21.9574C12.5252 21.9728 12.5025 21.9851 12.4863 21.9936C12.4783 21.9978 12.4716 22.0018 12.4668 22.0043L12.459 22.0082C12.1723 22.1554 11.8287 22.1554 11.542 22.0082L11.5332 22.0043C11.5284 22.0018 11.5217 21.9978 11.5137 21.9936C11.4975 21.9851 11.4748 21.9728 11.4463 21.9574C11.3888 21.9264 11.3065 21.882 11.2041 21.8236C10.9991 21.7069 10.7101 21.5355 10.3652 21.3139C9.67743 20.8717 8.75635 20.2208 7.83105 19.3881C6.01806 17.7564 4.0002 15.2542 4 12.1195V5.81974C4 5.40648 4.25417 5.03504 4.63965 4.88615L11.6396 2.18693L11.7285 2.15763ZM12 19.9711C12.1538 19.8803 12.3413 19.7672 12.5527 19.6313C13.1773 19.2298 14.0066 18.6427 14.8311 17.9008C16.5178 16.3827 17.9998 14.3844 18 12.1195V6.50529L12 4.19083V19.9711ZM6 6.50529V12.1195C6.00021 14.3844 7.48225 16.3827 9.16895 17.9008C9.4478 18.1518 9.72817 18.3838 10 18.5981V4.96232L6 6.50529Z"
    />
    <path d="M6 6.50529V12.1195C6.00021 14.3844 7.48225 16.3827 9.16895 17.9008C9.4478 18.1518 9.72817 18.3838 10 18.5981V4.96232L6 6.50529Z" />
  </svg>
);

const securityShieldHalvedFilledIconDefinition = svgToIconDefinition(
  securityShieldHalvedFilledSvg,
  'security-shield-halved-filled'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={securityShieldHalvedFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SecurityShieldHalvedFilledIcon';
}

export default RefIcon;
