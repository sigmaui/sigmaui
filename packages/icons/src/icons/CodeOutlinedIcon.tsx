// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const codeOutlinedSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4688 4.15127C14.8854 4.33877 15.0521 4.65127 14.9688 5.08877L10.4688 19.5888C10.3021 20.0054 9.98958 20.1721 9.53125 20.0888C9.11458 19.9221 8.94792 19.6096 9.03125 19.1513L13.5312 4.65127C13.7188 4.2346 14.0312 4.06793 14.4688 4.15127ZM16.7188 7.87002C17.0521 7.55752 17.3958 7.5471 17.75 7.83877L21.75 11.5888C21.9167 11.7346 22 11.9117 22 12.12C22 12.3283 21.9167 12.5158 21.75 12.6825L17.75 16.4325C17.3958 16.7033 17.0521 16.6825 16.7188 16.37C16.4271 16.0158 16.4375 15.6721 16.75 15.3388L20.1562 12.12L16.75 8.93252C16.4375 8.57835 16.4271 8.22418 16.7188 7.87002ZM7.3125 7.87002C7.58333 8.22418 7.5625 8.57835 7.25 8.93252L3.84375 12.12L7.25 15.3388C7.5625 15.6721 7.58333 16.0158 7.3125 16.37C6.95833 16.6825 6.60417 16.7033 6.25 16.4325L2.25 12.6825C2.08333 12.5158 2 12.3283 2 12.12C2 11.9117 2.08333 11.7346 2.25 11.5888L6.25 7.83877C6.60417 7.5471 6.95833 7.55752 7.3125 7.87002Z" />
  </svg>
);

const codeOutlinedIconDefinition = svgToIconDefinition(codeOutlinedSvg, 'code-outlined');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={codeOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodeOutlinedIcon';
}

export default RefIcon;
