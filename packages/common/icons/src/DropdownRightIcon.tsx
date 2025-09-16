import { IconProps } from './types.ts';

function DropdownRightIcon(props: IconProps) {
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
        d="M0.5 4C0.5 1.79086 2.29086 0 4.5 0H20.5C22.7091 0 24.5 1.79086 24.5 4V20C24.5 22.2091 22.7091 24 20.5 24H4.5C2.29086 24 0.5 22.2091 0.5 20V4Z"
        fillOpacity="0"
      />
      <path
        d="M16.2188 12.7173L12.2188 16.7089C11.8854 17 11.5208 17.0728 11.125 16.9272C10.7292 16.7401 10.5208 16.4283 10.5 15.9917V8.00832C10.5208 7.57173 10.7292 7.25988 11.125 7.07277C11.5208 6.92723 11.8854 7 12.2188 7.29106L16.2188 11.2827C16.4062 11.4906 16.5 11.7297 16.5 12C16.5 12.2703 16.4062 12.5094 16.2188 12.7173Z"
        fillOpacity="1"
      />
    </svg>
  );
}

DropdownRightIcon.displayName = 'DropdownRightIcon';

export default DropdownRightIcon;
