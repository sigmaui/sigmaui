// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const arrowLeftFilledSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12.12C4 11.8548 4.10536 11.6004 4.29289 11.4129L11.2929 4.41289C11.6834 4.02236 12.3166 4.02236 12.7071 4.41289C13.0976 4.80341 13.0976 5.43658 12.7071 5.8271L7.41421 11.12L19 11.12C19.5523 11.12 20 11.5677 20 12.12C20 12.6723 19.5523 13.12 19 13.12L7.41421 13.12L12.7071 18.4129C13.0976 18.8034 13.0976 19.4366 12.7071 19.8271C12.3166 20.2176 11.6834 20.2176 11.2929 19.8271L4.29289 12.8271C4.10536 12.6396 4 12.3852 4 12.12Z"
    />
  </svg>
);

const arrowLeftFilledIconDefinition = svgToIconDefinition(
  arrowLeftFilledSvg,
  'arrow-left-filled'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={arrowLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowLeftFilledIcon';
}

export default RefIcon;
