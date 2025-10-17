import { CSSProperties, IRenderer, IStyle as FelaIStyle } from 'fela';
import { ProviderProps as FelaProviderProps } from 'react-fela';

export interface Locale {
  locale: string;
}

// ================================= Styles =================================
export type StylesObject = FelaIStyle;

// ================================= WithStyles =================================
export type VariantsStyle<ComponentBaseProps> = Array<{
  props: Partial<ComponentBaseProps>;
  style: StylesObject;
}>;

type StylesObjectWithVariants<ComponentBaseProps> = StylesObject & {
  variants?: VariantsStyle<ComponentBaseProps>;
};

export interface ComponentForwardProps<ClassKeys extends string> {
  classes: Record<ClassKeys, string>;
  renderer: IRenderer;
  prefixCls: string;
}

export type StyleFn<ComponentBaseProps, ClassKeys extends string> = (
  props: ComponentBaseProps & {
    tokens: Tokens;
    componentCls: string;
  }
) => Record<ClassKeys, StylesObjectWithVariants<ComponentBaseProps>>;

// ================================= Tokens =================================
interface ColorTokens {
  text: {
    strong: string;
    weak: string;
    disabled: string;
    brand: {
      primary: string;
      secondary: string;
    };
    error: string;
    warning: string;
    success: string;
    information: string;
    discovery: string;
    inverse: {
      strong: string;
      weak: string;
      disabled: string;
    };
    whiteFixed: string;
  };
  stroke: {
    strong: string;
    weak: string;
    darkest: string;
    selected: string;
    brand: {
      strong: string;
      weak: string;
    };
    inverse: {
      strong: string;
      weak: string;
    };
    error: {
      strong: string;
      weak: string;
    };
    warning: {
      strong: string;
      weak: string;
    };
    success: {
      strong: string;
      weak: string;
    };
    information: {
      strong: string;
      weak: string;
    };
    discovery: {
      strong: string;
      weak: string;
    };
  };
  fill: {
    strong: string;
    weak: string;
    weaker: string;
    hover: string;
    press: string;
    disabled: string;
    overlays: string;
    selected: {
      brand: {
        primary: string;
        secondary: string;
      };
      neutral: string;
    };
    inverse: {
      hover: string;
      press: string;
      selected: {
        solid: string;
        strong: string;
      };
    };
    brand: {
      strong: string;
      medium: string;
      weak: string;
    };
    error: {
      strong: string;
      medium: string;
      weak: string;
    };
    warning: {
      strong: string;
      medium: string;
      weak: string;
    };
    success: {
      strong: string;
      medium: string;
      weak: string;
    };
    information: {
      strong: string;
      medium: string;
      weak: string;
    };
    discovery: {
      strong: string;
      medium: string;
      weak: string;
    };
    blanked: string;
  };
  background: {
    base: string;
    raised: string;
    overlay: string;
    sunken: string;
    alternate: string;
    brand: string;
    inverse: string;
  };
}

interface fontWeightTokens {
  bold: CSSProperties['fontWeight'];
  semiBold: CSSProperties['fontWeight'];
  medium: CSSProperties['fontWeight'];
  regular: CSSProperties['fontWeight'];
  light: CSSProperties['fontWeight'];
}

interface fontSizeTokens {
  'display-xs': CSSProperties['fontSize'];
  'display-sm': CSSProperties['fontSize'];
  'display-md': CSSProperties['fontSize'];
  'display-lg': CSSProperties['fontSize'];
  'display-xl': CSSProperties['fontSize'];
  'display-2xl': CSSProperties['fontSize'];
  'text-xxs': CSSProperties['fontSize'];
  'text-xs': CSSProperties['fontSize'];
  'text-sm': CSSProperties['fontSize'];
  'text-md': CSSProperties['fontSize'];
  'text-lg': CSSProperties['fontSize'];
  'text-xl': CSSProperties['fontSize'];
}
interface fontLineHeightTokens {
  'display-xs': CSSProperties['lineHeight'];
  'display-sm': CSSProperties['lineHeight'];
  'display-md': CSSProperties['lineHeight'];
  'display-lg': CSSProperties['lineHeight'];
  'display-xl': CSSProperties['lineHeight'];
  'display-2xl': CSSProperties['lineHeight'];
  'text-xxs': CSSProperties['lineHeight'];
  'text-xs': CSSProperties['lineHeight'];
  'text-sm': CSSProperties['lineHeight'];
  'text-md': CSSProperties['lineHeight'];
  'text-lg': CSSProperties['lineHeight'];
  'text-xl': CSSProperties['lineHeight'];
}

interface RadiiTokens {
  default: CSSProperties['borderRadius'];
  xs: CSSProperties['borderRadius'];
  sm: CSSProperties['borderRadius'];
  md: CSSProperties['borderRadius'];
  lg: CSSProperties['borderRadius'];
  xl: CSSProperties['borderRadius'];
  '2xl': CSSProperties['borderRadius'];
}
interface BoxShadowTokens {
  xs: CSSProperties['boxShadow'];
  md: CSSProperties['boxShadow'];
  lg: CSSProperties['boxShadow'];
  xl: CSSProperties['boxShadow'];
  '2xl': CSSProperties['boxShadow'];
}
interface ZIndexTokens {
  popup: CSSProperties['zIndex'];
  tooltip: CSSProperties['zIndex'];
  drawer: CSSProperties['zIndex'];
  modal: CSSProperties['zIndex'];
  notification: CSSProperties['zIndex'];
}
interface IconTokens {
  size: {
    xxxs: CSSProperties['width'];
    xxs: CSSProperties['width'];
    xs: CSSProperties['width'];
    sm: CSSProperties['width'];
    md: CSSProperties['width'];
    lg: CSSProperties['width'];
    xl: CSSProperties['width'];
  };
}

interface ButtonTokens {
  height: {
    smallest: CSSProperties['height'];
    smaller: CSSProperties['height'];
    small: CSSProperties['height'];
    medium: CSSProperties['height'];
    standard: CSSProperties['height'];
    big: CSSProperties['height'];
    bigger: CSSProperties['height'];
    biggest: CSSProperties['height'];
  };
  spacing: {
    smaller: CSSProperties['height'];
    small: CSSProperties['height'];
    standard: CSSProperties['height'];
    big: CSSProperties['height'];
    bigger: CSSProperties['height'];
  };
  paddingVertical: {
    smallest: CSSProperties['height'];
    smaller: CSSProperties['height'];
    small: CSSProperties['height'];
    standard: CSSProperties['height'];
    big: CSSProperties['height'];
    bigger: CSSProperties['height'];
    biggest: CSSProperties['height'];
  };
  paddingHorizontal: {
    smallest: CSSProperties['height'];
    smaller: CSSProperties['height'];
    small: CSSProperties['height'];
    standard: CSSProperties['height'];
    big: CSSProperties['height'];
    bigger: CSSProperties['height'];
    biggest: CSSProperties['height'];
  };
  radii: {
    smallest: CSSProperties['height'];
    smaller: CSSProperties['height'];
    small: CSSProperties['height'];
    standard: CSSProperties['height'];
    big: CSSProperties['height'];
    bigger: CSSProperties['height'];
    biggest: CSSProperties['height'];
  };
}

export interface Tokens {
  colors: ColorTokens;
  fonts: string;
  fontSizes: fontSizeTokens;
  fontWeights: fontWeightTokens;
  lineHeights: fontLineHeightTokens;
  radii: RadiiTokens;
  boxShadows: BoxShadowTokens;
  zIndices: ZIndexTokens;
  icons: IconTokens;
  buttons: ButtonTokens;
}

// ================================= TokensConfig =================================
export type TokensConfig = {
  colors?: Partial<ColorTokens>;
  fonts?: string;
  fontSizes?: Partial<fontSizeTokens>;
  fontWeights?: Partial<fontWeightTokens>;
  lineHeights?: Partial<fontLineHeightTokens>;
  radii?: Partial<RadiiTokens>;
  boxShadows?: Partial<BoxShadowTokens>;
  zIndices?: Partial<ZIndexTokens>;
  icons?: Partial<IconTokens>;
  buttons?: Partial<ButtonTokens>;
};

// ================================= Components =================================
export interface ComponentsOverrides<ComponentBaseProps extends object, ClassKeys extends string> {
  defaultProps: ComponentBaseProps;
  styleOverrides:
    | Partial<Record<ClassKeys, StylesObjectWithVariants<ComponentBaseProps>>>
    | ((
        props: ComponentBaseProps & {
          tokens: Tokens;
          componentCls: string;
        }
      ) => Partial<Record<ClassKeys, StylesObjectWithVariants<ComponentBaseProps>>>);
}

export interface OverrideComponents extends Record<string, ComponentsOverrides<any, any>> {
  Button: ComponentsOverrides<any, 'wrapper' | 'prefix' | 'suffix' | 'link'>;
  Input: ComponentsOverrides<any, string>;
}

// ================================= Theme =================================

export interface Theme {
  locale: Locale;
  colors: ColorTokens;
  fonts: string;
  fontSizes: fontSizeTokens;
  fontWeights: fontWeightTokens;
  lineHeights: fontLineHeightTokens;
  radii: RadiiTokens;
  boxShadows: BoxShadowTokens;
  zIndices: ZIndexTokens;
  icons: IconTokens;
  buttons: ButtonTokens;
  overrideComponents: Partial<OverrideComponents>;
}

// ================================= SigmaUIProviderProps =================================

export interface ThemeConfig {
  modeConfig?: TokensConfig | Array<{ mode: string; tokens: TokensConfig }>;
  deviceConfig?: TokensConfig | Array<{ device: string; tokens: TokensConfig }>;
  overrideComponents?: OverrideComponents;
}

export interface SigmaUIProviderProps {
  /**
   * @type {ThemeConfig}
   * @description The theme config to use for the provider
   */
  themeConfig: ThemeConfig;
  /**
   * @type {React.ReactNode}
   * @description The children to render
   */
  children?: React.ReactNode;
  /**
   * @type {IRenderer}
   * @description The renderer to use for the provider
   */
  renderer: IRenderer;
  /**
   * @type {any}
   * @description The renderer config to use for the provider
   */
  rendererConfig?: any;

  /**
   * @type {any}
   * @description The theme renderer to use for the provider
   */
  themeRenderer?: any;
  /**
   * @type {string}
   * @description The root to use for the provider
   */
  root?: string | undefined;
  /**
   * @type {any}
   * @description The global style to use for the provider
   */
  globalStyles?: any;
  /**
   * @type {any}
   * @description The global props to use for the provider
   */
  globalProps?: any;
  /**
   * @type {any}
   * @description The theme props to use for the provider
   */
  themeProps?: {
    domain?: string;
    projectName?: string;
    isCssVars?: boolean;
    prefix?: string;
  };
  /**
   * @type {any}
   * @description The cookies to use for the provider
   */
  cookies?: any;
  /**
   * @type {string}
   * @description The theme mode to use for the provider
   */
  themeMode?: string;
  /**
   * @type {any}
   * @description The extra to use for the provider
   */
  extra?: any;
  /**
   * @type {boolean}
   * @description The splash mode to use for the provider
   */
  isSplashMode?: boolean;
  /**
   * @type {FelaProviderProps}
   * @description The RendererProvider props to use for the provider
   */
  rendererProviderProps?: Omit<FelaProviderProps, 'renderer'>;
  /**
   * @type {string}
   * @description The prefix to use for render component class name
   */
  prefix?: string;
}
