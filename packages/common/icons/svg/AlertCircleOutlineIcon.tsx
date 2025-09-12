import { IconProps } from '../types';

function AlertCircleOutlineIcon(props: IconProps) {
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
      <path d="M20 12.12C20 7.70172 16.4183 4.12 12 4.12C7.58172 4.12 4 7.70172 4 12.12C4 16.5383 7.58172 20.12 12 20.12C16.4183 20.12 20 16.5383 20 12.12ZM12.0088 14.7196C12.5609 14.7196 13.0086 15.1675 13.0088 15.7196C13.0088 16.2719 12.5611 16.7196 12.0088 16.7196H12C11.4477 16.7196 11 16.2719 11 15.7196C11.0002 15.1675 11.4478 14.7196 12 14.7196H12.0088ZM11 12.12V8.52039C11 7.9681 11.4477 7.52039 12 7.52039C12.5523 7.52039 13 7.9681 13 8.52039V12.12C13 12.6723 12.5523 13.12 12 13.12C11.4477 13.12 11 12.6723 11 12.12ZM22 12.12C22 17.6428 17.5228 22.12 12 22.12C6.47715 22.12 2 17.6428 2 12.12C2 6.59715 6.47715 2.12 12 2.12C17.5228 2.12 22 6.59715 22 12.12Z" />
    </svg>
  );
}

AlertCircleOutlineIcon.displayName = 'AlertCircleOutlineIcon';

export default AlertCircleOutlineIcon;
