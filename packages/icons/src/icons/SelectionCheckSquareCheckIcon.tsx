// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const selectionCheckSquareCheckSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.57143 3.12H18.4286C19.1518 3.14678 19.7545 3.40125 20.2366 3.88339C20.7188 4.36553 20.9732 4.96821 21 5.69142V18.5486C20.9732 19.2718 20.7188 19.8745 20.2366 20.3566C19.7545 20.8387 19.1518 21.0932 18.4286 21.12H5.57143C4.84821 21.0932 4.24554 20.8387 3.76339 20.3566C3.28125 19.8745 3.02679 19.2718 3 18.5486V5.69142C3.02679 4.96821 3.28125 4.36553 3.76339 3.88339C4.24554 3.40125 4.84821 3.14678 5.57143 3.12ZM16.5402 10.2316C16.9152 9.77625 16.9152 9.32089 16.5402 8.86553C16.0848 8.49053 15.6295 8.49053 15.1741 8.86553L10.7143 13.3254L8.82589 11.437C8.37054 11.062 7.91518 11.062 7.45982 11.437C7.08482 11.8923 7.08482 12.3477 7.45982 12.803L10.0312 15.3745C10.4866 15.7495 10.942 15.7495 11.3973 15.3745L16.5402 10.2316Z" />
  </svg>
);

const selectionCheckSquareCheckIconDefinition = svgToIconDefinition(
  selectionCheckSquareCheckSvg,
  'selection-check-square-check'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={selectionCheckSquareCheckIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SelectionCheckSquareCheckIcon';
}

export default RefIcon;
