// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const plusAddIconFilledSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3846 4.38462V10.6154H19.6154C20.0192 10.6154 20.351 10.7452 20.6106 11.0048C20.8702 11.2644 21 11.5962 21 12C21 12.4038 20.8702 12.7356 20.6106 12.9952C20.351 13.2548 20.0192 13.3846 19.6154 13.3846H13.3846V19.6154C13.3846 20.0192 13.2548 20.351 12.9952 20.6106C12.7356 20.8702 12.4038 21 12 21C11.5962 21 11.2644 20.8702 11.0048 20.6106C10.7452 20.351 10.6154 20.0192 10.6154 19.6154V13.3846H4.38462C3.98077 13.3846 3.64904 13.2548 3.38942 12.9952C3.12981 12.7356 3 12.4038 3 12C3 11.5962 3.12981 11.2644 3.38942 11.0048C3.64904 10.7452 3.98077 10.6154 4.38462 10.6154H10.6154V4.38462C10.6154 3.98077 10.7452 3.64904 11.0048 3.38942C11.2644 3.12981 11.5962 3 12 3C12.4038 3 12.7356 3.12981 12.9952 3.38942C13.2548 3.64904 13.3846 3.98077 13.3846 4.38462Z" />
  </svg>
);

const plusAddIconFilledIconDefinition = svgToIconDefinition(
  plusAddIconFilledSvg,
  'plus-add-icon-filled'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={plusAddIconFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusAddIconFilled';
}

export default RefIcon;
