import { IconProps } from './types.ts';

function MultimediaControlPlayOutlinedIcon(props: IconProps) {
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
      <path d="M7 19.1832L19 12.12L7 5.05674V19.1832ZM6.04167 3.37119C6.70833 3.02338 7.375 3.03676 8.04167 3.41132L20.0417 10.4746C20.6528 10.8491 20.9722 11.3976 21 12.12C20.9722 12.8424 20.6528 13.3908 20.0417 13.7654L8.04167 20.8287C7.375 21.2032 6.70833 21.2166 6.04167 20.8688C5.375 20.4942 5.02778 19.9324 5 19.1832V5.05674C5.02778 4.30761 5.375 3.74576 6.04167 3.37119Z" />
    </svg>
  );
}

MultimediaControlPlayOutlinedIcon.displayName =
  'MultimediaControlPlayOutlinedIcon';

export default MultimediaControlPlayOutlinedIcon;
