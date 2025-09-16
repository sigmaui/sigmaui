import { IconProps } from './types.ts';

function CaretDownFilledIcon(props: IconProps) {
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
      <path d="M11.2827 15.7188L7.29106 11.7188C7 11.3854 6.92723 11.0208 7.07277 10.625C7.25988 10.2292 7.57173 10.0208 8.00832 10H15.9917C16.4283 10.0208 16.7401 10.2292 16.9272 10.625C17.0728 11.0208 17 11.3854 16.7089 11.7188L12.7173 15.7188C12.5094 15.9062 12.2703 16 12 16C11.7297 16 11.4906 15.9062 11.2827 15.7188Z" />
    </svg>
  );
}

CaretDownFilledIcon.displayName = 'CaretDownFilledIcon';

export default CaretDownFilledIcon;
