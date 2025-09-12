import { IconProps } from '../types';

function RemoveMinusOutlinedIcon(props: IconProps) {
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
      <path d="M19 10.62C19.8284 10.62 20.5 11.2916 20.5 12.12C20.5 12.9484 19.8284 13.62 19 13.62H5C4.17157 13.62 3.5 12.9484 3.5 12.12C3.5 11.2916 4.17157 10.62 5 10.62H19Z" />
    </svg>
  );
}
RemoveMinusOutlinedIcon.displayName = 'RemoveMinusOutlinedIcon';

export default RemoveMinusOutlinedIcon;
