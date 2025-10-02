export type ColorsKeys =
  | 'base'
  | 'secondary'
  | 'background'
  | 'text'
  | 'error'
  | 'warning'
  | 'success'
  | 'border'
  | 'active'
  | 'placeholder'
  | 'description'
  | 'fillWeak'
  | 'neutral'
  | 'bgEmphasized';
export type FormColors = {
  requiredMark?: string;
  help?: string;
  note?: string;
};
export type InputColors = {
  text?: string;
  placeholder?: string;
};
export type ButtonColors = {
  text?: string;
  background?: string;
};
export type IconColors = {
  default?: string;
  hover?: string;
};
export type TooltipColors = {
  background?: string;
  text?: string;
};
export type PopupColors = {
  background?: string;
  text?: string;
  border?: string;
};
export type Colors = Partial<Record<ColorsKeys, string>> & {
  form?: FormColors;
  input?: InputColors;
  button?: ButtonColors;
  icon?: IconColors;
  tooltip?: TooltipColors;
  popup?: PopupColors;
};
export const formColors: FormColors = {
  requiredMark: '#d70015',
  help: 'rgba(0,0,0,0.45)',
  note: 'rgba(0,0,0,0.45)',
};

export const inputColors: InputColors = {
  text: 'rgba(0, 0, 0, 0.88)',
  placeholder: 'rgba(0,0,0,0.25)',
};

export const buttonColors: ButtonColors = {
  text: '#fff',
  background: '#f77f00',
};

export const iconColors: IconColors = {
  default: 'rgba(0,0,0,0.45)',
  hover: 'rgba(0,0,0,0.88)',
};

export const tooltipColors: TooltipColors = {
  background: 'rgba(0,0,0,0.85)',
  text: '#fff',
};

export const popupColors: PopupColors = {
  background: '#fff',
  text: '#000',
  border: 'rgba(41, 43, 51, 0.5)',
};

export const colors: Colors = {
  base: '#f77f00',
  secondary: '#5856D6',
  background: '#fff',
  text: '#fff',
  error: '#d70015',
  warning: '#FF9500',
  success: '#34C759',
  border: '#ddd',
  active: '#f77f00',
  placeholder: 'rgba(0,0,0,0.25)',
  description: 'rgba(0,0,0,0.45)',
  fillWeak: 'rgba(41, 43, 51, 0.05)',
  neutral: 'rgba(41, 43, 51, 0.7)',
  bgEmphasized: '#e9e8e6',
  form: formColors,
  input: inputColors,
  button: buttonColors,
  icon: iconColors,
  tooltip: tooltipColors,
  popup: popupColors,
};
