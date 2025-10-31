// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const folderOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6.495C3.02344 5.86218 3.24609 5.33484 3.66797 4.91296C4.08984 4.49109 4.61719 4.26843 5.25 4.245H9.89062C10.5938 4.245 11.1914 4.49109 11.6836 4.98328L13.1953 6.495H18.75C19.3828 6.51843 19.9102 6.74109 20.332 7.16296C20.7539 7.58484 20.9766 8.11218 21 8.745V17.745C20.9766 18.3778 20.7539 18.9052 20.332 19.327C19.9102 19.7489 19.3828 19.9716 18.75 19.995H5.25C4.61719 19.9716 4.08984 19.7489 3.66797 19.327C3.24609 18.9052 3.02344 18.3778 3 17.745V6.495ZM5.25 5.9325C4.89844 5.95593 4.71094 6.14343 4.6875 6.495V17.745C4.71094 18.0966 4.89844 18.2841 5.25 18.3075H18.75C19.1016 18.2841 19.2891 18.0966 19.3125 17.745V8.745C19.2891 8.39343 19.1016 8.20593 18.75 8.1825H13.0898C12.6914 8.1825 12.3516 8.04187 12.0703 7.76062L10.4883 6.17859C10.3242 6.01453 10.125 5.9325 9.89062 5.9325H5.25Z" />
  </svg>
);

const folderOutlinedIconDefinition = svgToIconDefinition(folderOutlinedSvg, 'folder-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={folderOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderOutlinedIcon';
}

export default RefIcon;
