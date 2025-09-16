import { IconProps } from './types.ts';

function CheckFilledIcon(props: IconProps) {
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
      <path d="M18.7188 7.28125C18.9062 7.48958 19 7.72917 19 8C19 8.27083 18.9062 8.51042 18.7188 8.71875L10.7188 16.7188C10.5104 16.9062 10.2708 17 10 17C9.72917 17 9.48958 16.9062 9.28125 16.7188L5.28125 12.7188C5.09375 12.5104 5 12.2708 5 12C5 11.7292 5.09375 11.4896 5.28125 11.2812C5.48958 11.0938 5.72917 11 6 11C6.27083 11 6.51042 11.0938 6.71875 11.2812L10 14.5938L17.2812 7.28125C17.4896 7.09375 17.7292 7 18 7C18.2708 7 18.5104 7.09375 18.7188 7.28125Z" />
    </svg>
  );
}

CheckFilledIcon.displayName = 'CheckFilledIcon';

export default CheckFilledIcon;
