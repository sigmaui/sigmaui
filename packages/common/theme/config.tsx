import { type Theme } from '@microui-kit/theme'
import themeValuePlugin from '@microui-kit/fela-plugin-theme-value'
import { formatProperty } from '@microui-kit/create-renderer'

import { modes } from './modes'
import { components } from './tokens/components'
import { colors } from './tokens/colors'
import { sizes, fontSizes, heights, radii } from './tokens/sizes'
import { variants } from './tokens/variants'
import { boxShadows } from './tokens/boxShadow'
import { zIndex } from './tokens/zIndex'

export const getProperty = (property: string) => {
  return (value: any, params: any = {}) => {
    const { theme, displayName, itemStyle, customProperty } = params;

    const properties = theme?.[property]?.[displayName];

    console.log('getProperty', value, properties, property, theme?.[property], displayName)

    if (displayName && properties) {
      const pureStyles = properties?.[value] || (value !== 'none' && (properties?.default || properties?.['_']));

      if (pureStyles) {
        const styles: any = {};

        Object.keys(pureStyles).forEach(key => {
          if (!itemStyle[key]) {
            styles[key] = pureStyles[key]
          }
        })

        return customProperty(styles)
      }
    }

    const styles = {
      ...theme?.[property][value]
    };

    return customProperty(styles)
  }
}

const themeMapping: any = {
  color: (theme: any) => theme.colors,
  backgroundColor: (theme: any) => theme.colors,
  borderColor: (theme: any) => theme.colors,
  fontSize: (theme: any) => theme.fontSizes,
  fontWeight: (theme: any) => theme.fontWeights,
  fontFamily: (theme: any) => theme.fontFamilies,
  borderRadius: (theme: any) => theme.radii,
  height: (theme: any) => theme.heights,
  boxShadow: (theme: any) => theme.shadows,
}

export const felaRendererConfig = {
  themeMapping,
  customProperties: {
    borderWidth: formatProperty('borderWidth'),
    size: getProperty('sizes'),
  },
  clsBlackList: [],
}
type BoxShadow = keyof typeof boxShadows
type Colors = keyof typeof colors

export type ITheme = Theme & {
  shadows: Record<BoxShadow, string>
  colors: Record<Colors, string>
}
const theme: ITheme = {
  base: {
    fontSize: 16,
    borderRadius: 8,
  },
  modes,
  components,
  colors,
  sizes,
  variants,
  fontSizes,
  heights,
  radii,
  shadows: boxShadows,
  zIndex
}

export const globalStyle = ({ theme, renderer }: any) => {
  const platform = theme?.platform

  return {
    '*, :after, :before': {
      '-webkitBoxSizing': 'border-box',
      boxSizing: 'border-box',
    },
    html: {
      'text-size-adjust': 'none',
    },
    body: {
      fontFamily: '"SigmaUI-Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      // lineHeight: '1rem',
      '-webkit-tap-highlight-color': 'transparent',
      overflowX: 'auto',
    },
    'html:fullscreen': {
      overflow: 'hidden',
    },
    'html:fullscreen body': {
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      right: platform?.isDesktop ? 'calc((var(--app-scrollbar-width, 0px) + 1px) * -1)' : undefined,
      overflowX: 'auto',
    },
    'body[data-overflow="hidden"]': {
      width: 'calc(100% - var(--app-scrollbar-width, 0px))',
    },
    'h1, h2, h3, h4, h5, h6, p, ol, ul, li': {
      margin: 0,
      padding: 0,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    'a:hover': {
      color: theme.colors.base,
    },
    'input, textarea, button': {
      fontFamily: 'inherit',
    },
    button: {
      color: 'inherit',
    },
    '::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 6,
      height: 6,
      borderRadius: 6,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(50 50 50 / 45%)',
      borderRadius: 6,
    },
    '::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
    '[data-placeholder-shown] [data-part="value-text"]': {
      color: '#999',
    },
  }
}

export default theme
