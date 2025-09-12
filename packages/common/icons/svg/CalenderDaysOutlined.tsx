import { IconProps } from '../types';

function CalenderDaysOutlinedIcon(props: IconProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z"
      />
      <path d="M9 11H11V13H9V11Z" />
      <path d="M13 11H15V13H13V11Z" />
      <path d="M9 15H11V17H9V15Z" />
      <path d="M13 15H15V17H13V15Z" />
    </svg>
  );
}

CalenderDaysOutlinedIcon.displayName = 'CalenderDaysOutlinedIcon';

export default CalenderDaysOutlinedIcon;
