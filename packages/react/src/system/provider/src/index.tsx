import React, { FC, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  RendererProvider,
  ThemeProvider as FelaThemeProvider,
  type ProviderProps,
  type ThemeProviderProps
} from 'react-fela';
import { useThemeMode } from '@microui-kit/use-theme-mode';
import { usePlatform } from '@microui-kit/platform';
import { getTheme } from '@microui-kit/theme';
import { cssifyObject } from '@microui-kit/utils';

import { THEME_MODE } from '@microui-kit/types';

export { THEME_MODE };

interface SigmaUIProviderProps {
  theme?: any
  children?: React.ReactNode
  renderer?: any
  rendererConfig?: any
  themeRenderer?: any
  root?: string | undefined
  globalStyle?: any
  globalProps?: any
  themeProps?: any
  cookies?: any
  themeMode?: string
  extra?: any
  isSplashMode?: boolean
  providerProps?: ProviderProps
  prefix?: string
}

const ROOT_TYPE = 'ROOT';

function renderRoot(params: any) {
  const { renderer, style, selector, mode, isCache = true } = params;

  const css = cssifyObject(style);

  const rootType = `${ROOT_TYPE}:${mode}`;

  const change = {
    type: rootType,
    css,
    selector,
  }

  if (isCache) {
    renderer.cache[rootType] = change
    renderer._emitChange(change)
  }

  // console.log('renderRoot', renderer.nodes);

  const node = renderer.nodes[rootType];

  if (node) {
    node.textContent = `${selector}{${css}}`
  }
}

function getMode(params: any) {
  const { deviceMode, themeMode } = params

  const modes: string[] = []

  if (deviceMode) {
    modes.push(deviceMode)
  }

  if (themeMode) {
    modes.push(themeMode)
  }

  if (modes.length === 0) {
    return ''
  }

  return modes.join(':')
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children, overwrite }) => {
  return (
    <FelaThemeProvider
      theme={theme}
      overwrite={overwrite}
    >
      {children}
    </FelaThemeProvider>
  )
}

export const SigmaUIProvider: FC<SigmaUIProviderProps> = ({
  theme: themeFromProp,
  children,
  rendererConfig = {},
  themeRenderer,
  root = ':root',
  globalStyle = {},
  globalProps = {},
  themeProps = {},
  renderer,
  cookies,
  extra,
  themeMode: themeModeFromProp,
  providerProps = {},
  prefix,

}) => {
  const rendererRef = useRef(false);
  const { platform }: any = usePlatform();
  const deviceMode = platform?.device;

  const { mode: themeMode, changeMode } = useThemeMode({
    cookies,
    mode: themeModeFromProp || THEME_MODE.DARK,
  })

  const { plugins = [], ...configs }: any = rendererConfig;

  const { domain, projectName, isCssVars } = themeProps;

  const mode = useMemo(() => {
    return getMode({ deviceMode, themeMode })
  }, [deviceMode, themeMode])

  const theme = getTheme(themeFromProp, {
    deviceMode,
    themeMode,
    domain,
    projectName,
    platform,
    isCssVars,
    prefix
  })

  const modes = theme?.modes;

  useMemo(() => {
    Object.keys(configs).forEach((key) => {
      renderer[key] = configs[key]
    })
  }, [configs])

  const rootSelector = mode ? `${root}[data-mode="${mode}"]` : root;

  const renderCssVars = useCallback(() => {
    if (theme.__cssVars) {
      renderRoot({
        renderer,
        selector: rootSelector,
        style: theme.__cssVars,
        mode,
      })
    }
  }, [JSON.stringify(theme.__cssVars), mode])

  if (!rendererRef.current) {
    rendererRef.current = true;

    if (typeof globalStyle === 'function') {
      globalStyle = globalStyle({ theme, renderer })
    }

    const { html: htmlStyle = {}, body: bodyStyle = {}, ...staticStyle }: any = globalStyle;

    renderer.renderStatic({
      // scrollbarColor: 'hsl(0, 0%, 67%) transparent',
      ...htmlStyle,
    }, 'html');

    renderer.renderStatic({
      margin: 0,
      ...bodyStyle,
    }, 'body');

    const lightName = THEME_MODE.LIGHT

    const lightConfig = modes?.[lightName] || themeFromProp;

    const lightCss = {
      backgroundColor: lightConfig.colors?.background || '#ffffff',
      color: lightConfig.colors?.default || '#1a1a1a',
      // colorScheme: 'light'
    }

    const darkName = THEME_MODE.DARK;

    const darkConfig = mode?.[darkName] || {};

    const darkCss = {
      backgroundColor: darkConfig.colors?.background || '#000000',
      color: darkConfig.colors?.default || '#ffffff',
      // colorScheme: 'dark'
    }

    renderer.renderStatic(lightCss, `html[data-theme-mode=${lightName}]`)
    renderer.renderStatic(darkCss, `html[data-theme-mode=${darkName}]`)

    const staticKeys = Object.keys(staticStyle);

    if (staticKeys.length > 0) {
      staticKeys.forEach((key) => {
        renderer.renderStatic(staticStyle[key], key)
      })
    }

    renderCssVars();

    if (typeof themeRenderer === 'function') {
      // @ts-ignore
      themeRenderer(renderer);
    }
  }

  globalProps.changeMode = changeMode;

  useEffect(() => {
    renderCssVars()
  }, [JSON.stringify(theme.__cssVars)])

  useEffect(() => {
    const element = document.documentElement;
    element.setAttribute('data-mode', mode);
  }, [mode])

  return (
    <RendererProvider
      {...providerProps}
      renderer={renderer}
    >
      <ThemeProvider
        theme={{
          ...theme,
          cookies,
          deviceMode,
          themeMode,
          globalProps
        }}
      >
        {children}
        {extra}
      </ThemeProvider>
    </RendererProvider>
  )
}

export default SigmaUIProvider
