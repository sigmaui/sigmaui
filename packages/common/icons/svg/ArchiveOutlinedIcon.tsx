import { IconProps } from '../types';

function ArchiveOutlinedIcon(props: IconProps) {
  const { ...restProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M21 4L21.1025 4.00488C21.6067 4.05621 22 4.48232 22 5V8.88867C22 9.44096 21.5523 9.88867 21 9.88867H20.3633V19C20.3633 19.5523 19.9156 20 19.3633 20H4.63672C4.08443 20 3.63672 19.5523 3.63672 19V9.88867H3C2.44772 9.88867 2 9.44096 2 8.88867V5L2.00488 4.89746C2.05621 4.39333 2.48232 4 3 4H21ZM5.63672 18H18.3633V9.88867H5.63672V18ZM13.6367 11L13.7383 11.0049C14.2427 11.0559 14.6367 11.4821 14.6367 12C14.6367 12.5179 14.2427 12.9441 13.7383 12.9951L13.6367 13H10.3633C9.81116 12.9998 9.36328 12.5522 9.36328 12C9.36328 11.4478 9.81116 11.0002 10.3633 11H13.6367ZM4 7.88867H20V6H4V7.88867Z"
      />
    </svg>
  );
}

ArchiveOutlinedIcon.displayName = 'ArchiveOutlinedIcon';

export default ArchiveOutlinedIcon;
