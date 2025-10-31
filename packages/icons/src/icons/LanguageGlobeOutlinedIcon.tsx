// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const languageGlobeOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22.12C6.477 22.12 2 17.643 2 12.12C2 6.597 6.477 2.12 12 2.12C17.523 2.12 22 6.597 22 12.12C22 17.643 17.523 22.12 12 22.12ZM9.71 19.787C8.72341 17.6943 8.15187 15.4302 8.027 13.12H4.062C4.25683 14.6588 4.89425 16.108 5.89686 17.2915C6.89947 18.475 8.22414 19.3419 9.71 19.787ZM10.03 13.12C10.181 15.559 10.878 17.85 12 19.872C13.1525 17.7966 13.8256 15.4895 13.97 13.12H10.03ZM19.938 13.12H15.973C15.8481 15.4302 15.2766 17.6943 14.29 19.787C15.7759 19.3419 17.1005 18.475 18.1031 17.2915C19.1057 16.108 19.7432 14.6588 19.938 13.12ZM4.062 11.12H8.027C8.15187 8.80978 8.72341 6.54568 9.71 4.453C8.22414 4.8981 6.89947 5.76504 5.89686 6.94854C4.89425 8.13204 4.25683 9.58118 4.062 11.12ZM10.031 11.12H13.969C13.8249 8.75056 13.1521 6.44346 12 4.368C10.8475 6.44338 10.1744 8.75049 10.03 11.12M14.289 4.453C15.2759 6.54561 15.8478 8.80971 15.973 11.12H19.938C19.7432 9.58118 19.1057 8.13204 18.1031 6.94854C17.1005 5.76504 15.7759 4.8981 14.29 4.453" />
  </svg>
);

const languageGlobeOutlinedIconDefinition = svgToIconDefinition(
  languageGlobeOutlinedSvg,
  'language-globe-outlined'
);

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={languageGlobeOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LanguageGlobeOutlinedIcon';
}

export default RefIcon;
