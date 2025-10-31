// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const multimediaControlPlayFilledSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.04167 3.41132L20.0417 10.4746C20.6528 10.8759 20.9722 11.4244 21 12.12C20.9722 12.8424 20.6528 13.3908 20.0417 13.7654L8.04167 20.8287C7.375 21.2032 6.70833 21.2166 6.04167 20.8688C5.375 20.4942 5.02778 19.9324 5 19.1832V5.05674C5.02778 4.30761 5.375 3.74576 6.04167 3.37119C6.70833 3.02338 7.375 3.03676 8.04167 3.41132Z" />
  </svg>
);

const multimediaControlPlayFilledIconDefinition = svgToIconDefinition(
  multimediaControlPlayFilledSvg,
  'multimedia-control-play-filled'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={multimediaControlPlayFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MultimediaControlPlayFilledIcon';
}

export default RefIcon;
