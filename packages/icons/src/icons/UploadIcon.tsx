// GENERATE BY ./scripts/migrate-icons-to-smicon.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const uploadSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18.3427V14.787C3 14.2347 3.44772 13.787 4 13.787C4.55228 13.787 5 14.2347 5 14.787V18.3427C5.00011 18.5488 5.08178 18.7467 5.22754 18.8925C5.3733 19.0382 5.57122 19.1199 5.77734 19.12H18.2227C18.4288 19.1199 18.6267 19.0382 18.7725 18.8925C18.9182 18.7467 18.9999 18.5488 19 18.3427V14.787C19 14.2347 19.4477 13.787 20 13.787C20.5523 13.787 21 14.2347 21 14.787V18.3427C20.9999 19.0792 20.7074 19.7857 20.1865 20.3065C19.6657 20.8274 18.9592 21.1199 18.2227 21.12H5.77734C5.04079 21.1199 4.33431 20.8274 3.81348 20.3065C3.29264 19.7857 3.00011 19.0792 3 18.3427ZM11 14.787V6.53406L8.2627 9.27136C7.87217 9.66189 7.23916 9.66189 6.84863 9.27136C6.45811 8.88084 6.45811 8.24782 6.84863 7.8573L11.293 3.41296L11.3662 3.34656C11.5442 3.20072 11.7679 3.12 12 3.12C12.2652 3.12 12.5195 3.22543 12.707 3.41296L17.1514 7.8573L17.2197 7.93347C17.5402 8.32625 17.5175 8.90521 17.1514 9.27136C16.7852 9.63752 16.2063 9.66017 15.8135 9.33972L15.7373 9.27136L13 6.53406V14.787C12.9998 15.3391 12.5522 15.787 12 15.787C11.4478 15.787 11.0002 15.3391 11 14.787Z" />
  </svg>
);

const uploadIconDefinition = svgToIconDefinition(uploadSvg, 'upload');

const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={uploadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UploadIcon';
}

export default RefIcon;
