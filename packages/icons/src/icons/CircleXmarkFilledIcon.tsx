// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const circleXmarkFilledSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.1189 7.88108C15.685 7.44718 14.9817 7.44723 14.5477 7.88108L12 10.4288L9.45226 7.88108L9.36762 7.80512C8.93123 7.4492 8.28788 7.47435 7.88108 7.88108C7.47428 8.28787 7.44918 8.93121 7.80512 9.36762L7.88108 9.45226L10.4288 12L7.88108 14.5477C7.44716 14.9817 7.44716 15.685 7.88108 16.1189C8.31499 16.5528 9.01835 16.5528 9.45226 16.1189L12 13.5712L14.5477 16.1189L14.6324 16.1949C15.0688 16.5508 15.7121 16.5257 16.1189 16.1189C16.5257 15.7121 16.5508 15.0688 16.1949 14.6324L16.1189 14.5477L13.5712 12L16.1189 9.45226C16.5528 9.01834 16.5528 8.31497 16.1189 7.88108Z" />
  </svg>
);

const circleXmarkFilledIconDefinition = svgToIconDefinition(
  circleXmarkFilledSvg,
  'circle-xmark-filled'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={circleXmarkFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CircleXmarkFilledIcon';
}

export default RefIcon;
