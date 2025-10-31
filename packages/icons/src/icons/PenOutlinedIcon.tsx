// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const penOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6865 6.61988L6.01866 16.2868L5.33897 18.78L7.83214 18.1003L17.4999 8.43336L15.6865 6.61988ZM20.9142 6.48798C20.9142 6.91893 20.8291 7.34567 20.6642 7.74384C20.4992 8.14202 20.258 8.50449 19.9532 8.80927L9.05968 19.7028C8.93665 19.8258 8.78319 19.9139 8.61534 19.9597L4.17686 21.1706C3.83077 21.2648 3.46079 21.1664 3.20714 20.9128C2.95349 20.6591 2.85509 20.2891 2.94932 19.9431L4.16026 15.5046L4.20225 15.3815C4.25231 15.262 4.32486 15.1525 4.4171 15.0602L15.3107 4.16669C15.6154 3.86194 15.9779 3.62068 16.3761 3.45575C16.7742 3.29086 17.201 3.20575 17.6319 3.20575C18.0629 3.20576 18.4896 3.29083 18.8878 3.45575C19.286 3.6207 19.6484 3.8619 19.9532 4.16669C20.258 4.47148 20.4992 4.83389 20.6642 5.23212C20.8291 5.6303 20.9142 6.05699 20.9142 6.48798Z" />
  </svg>
);

const penOutlinedIconDefinition = svgToIconDefinition(penOutlinedSvg, 'pen-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={penOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PenOutlinedIcon';
}

export default RefIcon;
