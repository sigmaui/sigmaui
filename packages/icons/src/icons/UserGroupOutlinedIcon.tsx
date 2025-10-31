// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const userGroupOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.2568 14.0068C15.8989 14.1405 18 16.3247 18 19V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V19C16 17.3949 14.7394 16.0842 13.1543 16.0039L13 16H7C5.34315 16 4 17.3431 4 19V20L3.99512 20.1025C3.94379 20.6067 3.51768 21 3 21C2.48232 21 2.05621 20.6067 2.00488 20.1025L2 20V19C2 16.2386 4.23858 14 7 14H13L13.2568 14.0068Z" />
    <path d="M18.1348 15.0342C18.3941 14.5864 18.9472 14.4151 19.4092 14.623L19.501 14.6699L19.7744 14.8398C21.1145 15.7352 22 17.2637 22 19V20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20V19C20 17.9602 19.4711 17.0432 18.6641 16.5039L18.499 16.4004L18.4131 16.3447C18.0025 16.0478 17.8756 15.4822 18.1348 15.0342Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3C12.4853 3 14.5 5.01472 14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3ZM10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5Z"
    />
    <path d="M15.0967 3.9082C15.3189 3.44039 15.8574 3.22414 16.335 3.39453L16.4287 3.43359L16.708 3.57812C18.0745 4.349 19 5.81565 19 7.5C19 9.29656 17.9467 10.8453 16.4287 11.5664C15.93 11.8031 15.3337 11.5912 15.0967 11.0928C14.8597 10.5939 15.0725 9.99676 15.5713 9.75977C16.418 9.35736 17 8.49557 17 7.5C17 6.56659 16.4882 5.75115 15.7266 5.32129L15.5713 5.24023L15.4805 5.19141C15.0473 4.92878 14.8749 4.37567 15.0967 3.9082Z" />
  </svg>
);

const userGroupOutlinedIconDefinition = svgToIconDefinition(
  userGroupOutlinedSvg,
  'user-group-outlined'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={userGroupOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserGroupOutlinedIcon';
}

export default RefIcon;
