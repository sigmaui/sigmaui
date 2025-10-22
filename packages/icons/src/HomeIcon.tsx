import React from 'react';

import type { IconProps } from './types';

const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, width, height, ...props }, ref) => {
    const finalWidth = width ?? size;
    const finalHeight = height ?? size;
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalWidth}
        height={finalHeight}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Thay đổi path này theo icon mong muốn */}
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
);

HomeIcon.displayName = 'HomeIcon';

export default HomeIcon;
