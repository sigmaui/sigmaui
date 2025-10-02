import type { CSSProperties, IRenderer } from 'fela';
import type { WithTranslation } from 'react-i18next';
import { type Tailwind } from './tailwind';
import type { ITheme } from '../../theme/config';

export type ClassString = `${Tailwind}`;

export interface StyleProperties extends CSSProperties {
  size?: string;
  variant?: string;
}

export type Breakpoints = {
  breakpoints: { mediaType?: 'max' | 'min' | string } | { [key: string | number]: StyleProperties };
};

export type StylesProperties = { _className: string } | Breakpoints | StyleProperties | StylesObject;

export type StylesObject = { [key: string]: StyleProperties | StylesObject | false | number };

export type Styles<T> =
  | { [K in keyof T]?: StylesProperties }
  | ((theme: ITheme, props: any) => { [K in keyof T]?: StylesProperties });

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? (...args: Parameters<T[K]>) => {
        [key: string]: string;
      }
    : string;
};

export interface IStylesProps<IStyles> {
  _style?: Styles<IStyles>;
  extendStyle?: Styles<IStyles>;
}

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode | string;
}

export interface FCProps extends FCDefaultProps {
  _class?: ClassString | ClassString[] | string | undefined;
}

export interface FCWithStylesProps<IStyles = any> extends FCProps {
  classes?: Classes<IStyles>;
  theme?: ITheme;
  renderer?: IRenderer;
  size?: ITheme['sizes'];
  variant?: ITheme['variants'];
  t?: WithTranslation['t'];
  _style?: Styles<IStyles>;
  extendStyle?: Styles<IStyles>;
}
