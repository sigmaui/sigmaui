import { IconProps } from '../types';

function CaretUpFilledIcon(props: IconProps) {
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
      <path d="M12.7173 8.40125L16.7089 12.4012C17 12.7346 17.0728 13.0992 16.9272 13.495C16.7401 13.8908 16.4283 14.0992 15.9917 14.12H8.00832C7.57173 14.0992 7.25988 13.8908 7.07277 13.495C6.92723 13.0992 7 12.7346 7.29106 12.4012L11.2827 8.40125C11.4906 8.21375 11.7297 8.12 12 8.12C12.2703 8.12 12.5094 8.21375 12.7173 8.40125Z" />
    </svg>
  );
}

CaretUpFilledIcon.displayName = 'CaretUpFilledIcon';

export default CaretUpFilledIcon;
