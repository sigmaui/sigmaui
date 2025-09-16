import { IconProps } from './types.ts';

function DropdownLeftIcon(props: IconProps) {
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
        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
        fillOpacity="0"
      />
      <path
        d="M8.28125 12.7173C8.09375 12.5094 8 12.2703 8 12C8 11.7297 8.09375 11.4906 8.28125 11.2827L12.2812 7.29106C12.6146 7 12.9792 6.92723 13.375 7.07277C13.7708 7.25988 13.9792 7.57173 14 8.00832V15.9917C13.9792 16.4283 13.7708 16.7401 13.375 16.9272C12.9792 17.0728 12.6146 17 12.2812 16.7089L8.28125 12.7173Z"
        fillOpacity="1"
      />
    </svg>
  );
}

DropdownLeftIcon.displayName = 'DropdownLeftIcon';

export default DropdownLeftIcon;
