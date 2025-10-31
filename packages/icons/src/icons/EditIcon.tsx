// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const editSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3.11999C17.2626 2.85735 17.5744 2.64901 17.9176 2.50687C18.2608 2.36472 18.6286 2.29156 19 2.29156C19.3714 2.29156 19.7392 2.36472 20.0824 2.50687C20.4256 2.64901 20.7374 2.85735 21 3.11999C21.2626 3.38264 21.471 3.69444 21.6131 4.0376C21.7553 4.38076 21.8284 4.74856 21.8284 5.11999C21.8284 5.49143 21.7553 5.85922 21.6131 6.20238C21.471 6.54554 21.2626 6.85735 21 7.11999L7.5 20.62L2 22.12L3.5 16.62L17 3.11999Z" />
  </svg>
);

const editIconDefinition = svgToIconDefinition(editSvg, 'edit');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={editIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EditIcon';
}

export default RefIcon;
