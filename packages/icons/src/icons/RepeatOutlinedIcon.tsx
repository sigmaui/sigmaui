// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const repeatOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15V9.13574L3.64062 10.2686C3.21638 10.6221 2.58502 10.5648 2.23144 10.1406C1.8779 9.71638 1.93518 9.08502 2.35937 8.73145L5.35937 6.23145L5.43164 6.17773C5.79773 5.92433 6.293 5.94176 6.64062 6.23145L9.64062 8.73145C10.0648 9.08502 10.1221 9.71638 9.76855 10.1406C9.41497 10.5648 8.78362 10.6221 8.35937 10.2686L7 9.13574V15C7 15.5523 7.44771 16 8 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H8C6.34314 18 5 16.6569 5 15ZM17 9C17 8.44772 16.5523 8 16 8H13C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6H16C17.6569 6 19 7.34315 19 9V14.8643L20.3594 13.7314C20.7836 13.3779 21.415 13.4352 21.7686 13.8594C22.1221 14.2836 22.0648 14.915 21.6406 15.2686L18.6406 17.7686C18.2698 18.0776 17.7302 18.0776 17.3594 17.7686L14.3594 15.2686C13.9352 14.915 13.8779 14.2836 14.2314 13.8594C14.585 13.4352 15.2164 13.3779 15.6406 13.7314L17 14.8643V9Z" />
  </svg>
);

const repeatOutlinedIconDefinition = svgToIconDefinition(repeatOutlinedSvg, 'repeat-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={repeatOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RepeatOutlinedIcon';
}

export default RefIcon;
