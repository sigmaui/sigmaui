import { IconProps } from './types.ts';

function ChartSimpleOutlineIcon(props: IconProps) {
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
      <path d="M4 21V14.25C4 13.6977 4.44772 13.25 5 13.25C5.55228 13.25 6 13.6977 6 14.25V21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21ZM11 21V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21ZM18 21V9.75C18 9.19772 18.4477 8.75 19 8.75C19.5523 8.75 20 9.19772 20 9.75V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21Z" />
    </svg>
  );
}

ChartSimpleOutlineIcon.displayName = 'ChartSimpleOutlineIcon';

export default ChartSimpleOutlineIcon;
