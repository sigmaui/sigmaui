import { IconProps } from './types.ts';

function SelectionCheckSquareUnCheckIcon(props: IconProps) {
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
      <path d="M18.4286 5.04857H5.57143C5.16964 5.07535 4.95536 5.28964 4.92857 5.69142V18.5486C4.95536 18.9504 5.16964 19.1646 5.57143 19.1914H18.4286C18.8304 19.1646 19.0446 18.9504 19.0714 18.5486V5.69142C19.0446 5.28964 18.8304 5.07535 18.4286 5.04857ZM5.57143 3.12H18.4286C19.1518 3.14678 19.7545 3.40125 20.2366 3.88339C20.7188 4.36553 20.9732 4.96821 21 5.69142V18.5486C20.9732 19.2718 20.7188 19.8745 20.2366 20.3566C19.7545 20.8387 19.1518 21.0932 18.4286 21.12H5.57143C4.84821 21.0932 4.24554 20.8387 3.76339 20.3566C3.28125 19.8745 3.02679 19.2718 3 18.5486V5.69142C3.02679 4.96821 3.28125 4.36553 3.76339 3.88339C4.24554 3.40125 4.84821 3.14678 5.57143 3.12Z" />
    </svg>
  );
}

SelectionCheckSquareUnCheckIcon.displayName = 'SelectionCheckSquareUnCheckIcon';

export default SelectionCheckSquareUnCheckIcon;
