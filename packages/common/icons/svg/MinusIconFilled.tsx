import { IconProps } from '../types';

function MinusIconFilled(props: IconProps) {
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
      <path d="M21 12C21 12.4038 20.8702 12.7356 20.6106 12.9952C20.351 13.2548 20.0192 13.3846 19.6154 13.3846H4.38462C3.98077 13.3846 3.64904 13.2548 3.38942 12.9952C3.12981 12.7356 3 12.4038 3 12C3 11.5962 3.12981 11.2644 3.38942 11.0048C3.64904 10.7452 3.98077 10.6154 4.38462 10.6154H19.6154C20.0192 10.6154 20.351 10.7452 20.6106 11.0048C20.8702 11.2644 21 11.5962 21 12Z" />
    </svg>
  );
}

MinusIconFilled.displayName = 'MinusIconFilled';

export default MinusIconFilled;
