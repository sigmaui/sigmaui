import deepmerge from 'deepmerge';

import { getDefaultProps, getRestProps } from '@microui-kit/system';
import { isObject, hyphenateProperty } from '@microui-kit/utils';

import { rgba, linearGradient, radialGradient, lighten, darken, pxToRem } from './functions';
import defaultToken from './defaultToken';
import { ThemeConfig, Tokens, TokensConfig } from './types';

export type DefaultTheme = ThemeVariables & {
  base?: ThemeVariables;
  components?: ThemeComponents;
  modes?: ThemeModes;
  domains?: ThemeDomains;
  colors?: ThemeColors;
  projects?: ThemeProjects;
};

export type StyleObject = {
  [key: string]: string | number | false | StyleObject | (string | number | StyleObject)[];
};

export interface ThemeVariables {
  [key: string]: number | string | ThemeVariables;
}

export interface ThemeComponent {
  defaultProps?: any;
  _style?: any;
}

export type ThemeComponents = Record<string, ThemeComponent>;

export type ThemeColors = ThemeVariables;

export type ThemeDomains = ThemeVariables;

export type ThemeProjects = ThemeVariables;

export interface ThemeModes {
  [key: 'mobile' | 'tablet' | 'dark' | 'light' | string]: ThemeVariables;
}

export interface ThemeFns {
  rgba: (color: string, alpha: number) => string | undefined;
  linearGradient: typeof linearGradient;
  radialGradient: typeof radialGradient;
  lighten: (color: string, alpha: number) => string;
  darken: (color: string, alpha: number) => string;
  pxToRem: typeof pxToRem;
  getDefaultProps: typeof getDefaultProps;
  getRestProps: typeof getRestProps;
}

const whiteTokens = [
  'base',
  'types',

  'colors',
  'fonts',
  'fontSizes',
  'fontWeights',
  'lineHeights',
  'radii',
  'boxShadows',
  'zIndices',
  'icons',
  'buttons',
];
const whiteValueNumberTokens = [
  'fontWeights',
  'lineHeights',
  'zIndices',
  'letterSpacings',
  'wordSpacings',
];

const getColorKey = (color: string): string => {
  return color.replace(`var(`, '').replace(')', '');
};

const fns = (theme: DefaultTheme): ThemeFns => {
  return {
    rgba: (color: string, alpha: number) => {
      let tempColor = color;
      if (!tempColor) {
        return;
      }

      if (tempColor.startsWith('var')) {
        // @ts-ignore
        tempColor = theme.__cssVars[getColorKey(color)] as string;
      }

      return rgba(color, alpha);
    },
    linearGradient,
    radialGradient,
    lighten: (color: string, alpha: number) => {
      if (color.startsWith('var')) {
        // @ts-ignore
        color = theme.__cssVars[getColorKey(color)];
      }

      return lighten(color, alpha);
    },
    darken: (color: string, alpha: number) => {
      if (color.startsWith('var')) {
        // @ts-ignore
        color = theme.__cssVars[getColorKey(color)];
      }

      return darken(color, alpha);
    },
    pxToRem,
    getDefaultProps,
    getRestProps,
  };
};

export type Theme = DefaultTheme & {
  __cssVars?: Record<string, string>;
  __cssVarsByMode?: Record<string, Record<string, string>>;
  fn?: ThemeFns;
};

interface WithCssVarsOptions {
  prefix?: string;
}

interface MapVarsParams {
  level?: number;
  path?: string[];
  isPass?: boolean;
  tokenKey?: string;
}

const withCssVars = (theme: Theme, options: WithCssVarsOptions = {}) => {
  const { prefix = 'sm' } = options;

  const vars: Record<string, string> = {};
  const modes = (theme as any).modes || {};

  const mapVars = (data: any, params: MapVarsParams = {}) => {
    const { level, path = [], isPass, tokenKey } = params;

    Object.keys(data).forEach(key => {
      const value = data[key];
      const nextPath = [...path, hyphenateProperty(key)];

      if (isObject(value)) {
        mapVars(value, {
          // level: level + 1,
          tokenKey: tokenKey ?? key,
          path: nextPath,
          isPass: level === 0 ? whiteTokens.includes(key) : isPass,
        });
      } else {
        if (isPass ?? whiteTokens.includes(key)) {
          const varKey = `--${prefix}-${nextPath.join('-')}`;

          data[key] = `var(${varKey})`;

          const varValue = vars[varKey];

          if (varValue === undefined) {
            if (
              typeof value === 'number' &&
              tokenKey &&
              !whiteValueNumberTokens.includes(tokenKey)
            ) {
              vars[varKey] = pxToRem(value);
            } else {
              if (value) {
                vars[varKey] = value;
              }
            }
          }
        }
      }
    });
  };

  // Tạo CSS variables cho theme chính với reference đến modes
  const mapVarsWithModeReference = (data: any, params: MapVarsParams = {}) => {
    const { level, path = [], isPass, tokenKey } = params;

    Object.keys(data).forEach(key => {
      const value = data[key];
      const nextPath = [...path, hyphenateProperty(key)];

      if (isObject(value)) {
        mapVarsWithModeReference(value, {
          tokenKey: tokenKey ?? key,
          path: nextPath,
          isPass: level === 0 ? whiteTokens.includes(key) : isPass,
        });
      } else {
        if (isPass ?? whiteTokens.includes(key)) {
          const varKey = `--${prefix}-${nextPath.join('-')}`;

          data[key] = `var(${varKey})`;

          const varValue = vars[varKey];

          if (varValue === undefined) {
            if (
              typeof value === 'number' &&
              tokenKey &&
              !whiteValueNumberTokens.includes(tokenKey)
            ) {
              vars[varKey] = pxToRem(value);
            } else {
              if (value) {
                vars[varKey] = value;
              }
            }
          }
        }
      }
    });
  };

  // Tạo CSS variables cho theme chính
  mapVarsWithModeReference(theme, {
    level: 0,
    path: [],
  });

  // Tạo CSS variables cho từng mode riêng biệt
  Object.keys(modes).forEach(modeName => {
    const modeTokens = modes[modeName];

    // Tạo CSS variables với prefix mode
    const mapModeVars = (data: any, params: MapVarsParams = {}) => {
      const { level, path = [], isPass, tokenKey } = params;

      Object.keys(data).forEach(key => {
        const value = data[key];
        const nextPath = [...path, hyphenateProperty(key)];

        if (isObject(value)) {
          mapModeVars(value, {
            tokenKey: tokenKey ?? key,
            path: nextPath,
            isPass: level === 0 ? whiteTokens.includes(key) : isPass,
          });
        } else {
          if (isPass ?? whiteTokens.includes(key)) {
            const modeVarKey = `--${prefix}-${modeName}-${nextPath.join('-')}`;

            const varValue = vars[modeVarKey];

            if (varValue === undefined) {
              if (
                typeof value === 'number' &&
                tokenKey &&
                !whiteValueNumberTokens.includes(tokenKey)
              ) {
                vars[modeVarKey] = pxToRem(value);
              } else {
                if (value) {
                  vars[modeVarKey] = value;
                }
              }
            }
          }
        }
      });
    };

    mapModeVars(modeTokens, {
      level: 0,
      path: [],
    });
  });

  theme['__cssVars'] = vars;

  // Chỉ tạo __cssVarsByMode khi có nhiều hơn 1 mode
  if (Object.keys(modes).length > 1) {
    const cssVarsByMode: Record<string, Record<string, string>> = {};

    Object.keys(modes).forEach(modeName => {
      const modeTokens = modes[modeName];
      const modeVars: Record<string, string> = {};

      // Tạo CSS variables cho mode này
      const createModeVars = (data: any, path: string[] = []) => {
        Object.keys(data).forEach(key => {
          const value = data[key];
          const nextPath = [...path, hyphenateProperty(key)];

          if (isObject(value)) {
            createModeVars(value, nextPath);
          } else {
            const varKey = `--${prefix}-${nextPath.join('-')}`;
            const varValue =
              typeof value === 'number' && !whiteValueNumberTokens.includes(nextPath[0])
                ? pxToRem(value)
                : value;

            if (varValue) {
              modeVars[varKey] = varValue;
            }
          }
        });
      };

      createModeVars(modeTokens);
      cssVarsByMode[modeName] = modeVars;
    });

    theme['__cssVarsByMode'] = cssVarsByMode;
  }

  theme.fn = fns(theme);

  return theme;
};

interface GetThemeOptions {
  deviceMode: string;
  isCssVars?: boolean;
  prefix?: string;
}

const getTheme = (
  themeConfig: Omit<ThemeConfig, 'overrideComponents'>,
  options: GetThemeOptions
) => {
  const { modeConfig = {}, deviceConfig = {} } = themeConfig;
  const { deviceMode, isCssVars = true, prefix } = options;

  console.log('{ modeConfig, deviceConfig }', themeConfig);

  let modeTheme: Tokens = { ...defaultToken };
  const modes: Record<string, TokensConfig> = {};

  if (modeConfig) {
    if (Array.isArray(modeConfig)) {
      const modeTokens = modeConfig.map(item => {
        modes[item.mode] = item.tokens;
        return item.tokens;
      });

      modeTheme = deepmerge.all([defaultToken, ...modeTokens]) as Tokens;
    } else {
      modes['default'] = modeConfig;
      modeTheme = deepmerge.all([defaultToken, modeConfig]) as Tokens;
    }
  }

  let deviceTheme: Tokens = { ...modeTheme };

  if (deviceConfig) {
    if (Array.isArray(deviceConfig)) {
      let currentDeviceConfig: TokensConfig | undefined = undefined;

      const deviceTokens = deviceConfig.map(item => {
        if (item.device === deviceMode) {
          currentDeviceConfig = item.tokens;
        }
        return item.tokens;
      });
      if (currentDeviceConfig) {
        deviceTheme = deepmerge.all([...deviceTokens, modeTheme, currentDeviceConfig]) as Tokens;
      }
    } else {
      deviceTheme = deepmerge.all([modeTheme, deviceConfig]) as Tokens;
    }
  }

  const finalTheme: Theme = deviceTheme as unknown as Theme;

  // Thêm modes vào finalTheme để withCssVars có thể sử dụng
  if (Object.keys(modes).length > 0) {
    (finalTheme as any).modes = modes;
  }

  console.log(finalTheme);
  if (isCssVars) {
    return withCssVars(finalTheme, {
      prefix,
    });
  }

  return finalTheme;
};

export default getTheme;
