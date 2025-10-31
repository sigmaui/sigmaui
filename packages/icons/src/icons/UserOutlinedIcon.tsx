// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const userSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14C18.7614 14 21 16.2386 21 19V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V19C19 17.3431 17.6569 16 16 16H8C6.34315 16 5 17.3431 5 19V20L4.99512 20.1025C4.94379 20.6067 4.51768 21 4 21C3.48232 21 3.05621 20.6067 3.00488 20.1025L3 20V19C3 16.2386 5.23858 14 8 14H16Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z"
    />
  </svg>
);

const userOutlinedIconDefinition = svgToIconDefinition(userSvg, 'user-outlined');

/**![account-book](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4MCAxODRINzEydi02NGMwLTQuNC0zLjYtOC04LThoLTU2Yy00LjQgMC04IDMuNi04IDh2NjRIMzg0di02NGMwLTQuNC0zLjYtOC04LThoLTU2Yy00LjQgMC04IDMuNi04IDh2NjRIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NjRjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIxNmMwLTE3LjctMTQuMy0zMi0zMi0zMnpNNjQ4LjMgNDI2LjhsLTg3LjcgMTYxLjFoNDUuN2M1LjUgMCAxMCA0LjUgMTAgMTB2MjEuM2MwIDUuNS00LjUgMTAtMTAgMTBoLTYzLjR2MjkuN2g2My40YzUuNSAwIDEwIDQuNSAxMCAxMHYyMS4zYzAgNS41LTQuNSAxMC0xMCAxMGgtNjMuNFY3NTJjMCA1LjUtNC41IDEwLTEwIDEwaC00MS4zYy01LjUgMC0xMC00LjUtMTAtMTB2LTUxLjhoLTYzLjFjLTUuNSAwLTEwLTQuNS0xMC0xMHYtMjEuM2MwLTUuNSA0LjUtMTAgMTAtMTBoNjMuMXYtMjkuN2gtNjMuMWMtNS41IDAtMTAtNC41LTEwLTEwdi0yMS4zYzAtNS41IDQuNS0xMCAxMC0xMGg0NS4ybC04OC0xNjEuMWMtMi42LTQuOC0uOS0xMC45IDQtMTMuNiAxLjUtLjggMy4xLTEuMiA0LjgtMS4yaDQ2YzMuOCAwIDcuMiAyLjEgOC45IDUuNWw3Mi45IDE0NC4zIDczLjItMTQ0LjNhMTAgMTAgMCAwMTguOS01LjVoNDVjNS41IDAgMTAgNC41IDEwIDEwIC4xIDEuNy0uMyAzLjMtMS4xIDQuOHoiIC8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={userOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserOutlinedIcon';
}

export default RefIcon;
