// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

// SVG JSX element
const shuffleSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.29591 4.17871C4.66332 3.81444 5.24237 3.79378 5.6338 4.11523L5.70998 4.18457L10.1211 8.62891C10.5102 9.02086 10.5082 9.65389 10.1162 10.043C9.72432 10.432 9.09126 10.4299 8.70216 10.0381L4.29005 5.59375L4.22169 5.51758C3.90269 5.12362 3.92841 4.54351 4.29591 4.17871ZM21 8.44434C21 8.99662 20.5523 9.44434 20 9.44434C19.4477 9.44434 19 8.99662 19 8.44434V6.42578L5.70998 19.8154L5.6338 19.8848C5.24237 20.2062 4.66332 20.1856 4.29591 19.8213C3.90395 19.4322 3.90097 18.7982 4.29005 18.4062L17.5986 5H15.5879C15.0358 4.99981 14.5879 4.55217 14.5879 4C14.5879 3.44783 15.0358 3.00019 15.5879 3H20L20.1026 3.00488C20.6067 3.05621 21 3.48232 21 4V8.44434Z" />
    <path d="M19 17.5723V15.5557C19 15.0034 19.4477 14.5557 20 14.5557C20.5523 14.5557 21 15.0034 21 15.5557V20C21 20.5523 20.5523 21 20 21H15.5879C15.0358 20.9998 14.5879 20.5522 14.5879 20C14.5879 19.4478 15.0358 19.0002 15.5879 19H17.5986L13.9961 15.3711C13.6072 14.9792 13.6093 14.3461 14.001 13.957C14.393 13.568 15.0269 13.57 15.416 13.9619L19 17.5723Z" />
  </svg>
);

// Chuyển đổi SVG thành IconDefinition
const shuffleIconDefinition = svgToIconDefinition(shuffleSvg, 'shuffle');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={shuffleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShuffleIcon';
}

export default RefIcon;
