import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  ThemeProvider as FelaThemeProvider,
  RendererProvider as FelaRendererProvider,
  type ThemeProviderProps as FelaThemeProviderProps,
} from 'react-fela';
import { IRenderer } from 'fela';

import { useThemeMode } from '@microui-kit/use-theme-mode';
import { usePlatform } from '@microui-kit/platform';
import { cssifyObject } from '@microui-kit/utils';
import { THEME_MODE } from '@microui-kit/types';

import { SigmaUIProviderProps } from './types';
import getTheme from './getTheme';

const ThemeProvider: FC<FelaThemeProviderProps> = ({ theme, children, overwrite }) => {
  return (
    <FelaThemeProvider theme={theme} overwrite={overwrite}>
      {children}
    </FelaThemeProvider>
  );
};

const ROOT_TYPE = 'ROOT';

function renderRoot(params: {
  renderer: IRenderer;
  style: any;
  selector: string;
  mode: string;
  // config: any;
  isCache?: boolean;
}) {
  const { renderer, style, selector, mode, isCache = true } = params;

  const css = cssifyObject(style);

  const rootType = `${ROOT_TYPE}:${mode}`;

  const change = {
    type: rootType,
    css,
    selector,
  };

  console.log(renderer);

  if (isCache) {
    // @ts-ignore
    renderer.cache[rootType] = change;
    // @ts-ignore
    renderer._emitChange(change);
  }

  // @ts-ignore
  const node = renderer.nodes[rootType];

  if (node) {
    node.textContent = `${selector}{${css}}`;
  }
}

function getMode(params: { deviceMode: string; themeMode: string }) {
  const { deviceMode, themeMode } = params;

  const modes: string[] = [];

  if (deviceMode) {
    modes.push(deviceMode);
  }

  if (themeMode) {
    modes.push(themeMode);
  }

  if (modes.length === 0) {
    return '';
  }

  return modes.join(':');
}

const SigmaUIProvider: FC<SigmaUIProviderProps> = ({
  themeConfig,
  children,
  rendererConfig = {},
  themeRenderer,
  root = ':root',
  globalStyles = {},
  globalProps = {},
  themeProps = {},
  renderer,
  cookies,
  extra,
  themeMode: themeModeFromProp,
  rendererProviderProps = {},
  prefix,
}) => {
  const { modeConfig = {}, deviceConfig = {}, overrideComponents } = themeConfig;
  const rendererRef = useRef(false);
  const { platform }: ReturnType<typeof usePlatform> = usePlatform();
  const deviceMode = platform?.device || '';

  const { mode: themeMode, changeMode } = useThemeMode({
    cookies,
    mode: themeModeFromProp || THEME_MODE.LIGHT,
  });

  const { plugins = [], ...restRendererConfigs } = rendererConfig;

  const { domain, projectName, isCssVars } = themeProps;

  const mode = useMemo(() => {
    return getMode({ deviceMode, themeMode });
  }, [deviceMode, themeMode]);

  const theme = useMemo(
    () =>
      getTheme(
        { modeConfig, deviceConfig },
        {
          deviceMode,
          isCssVars,
          prefix,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeConfig]
  );

  const modes = theme?.__cssVarsByMode;

  // Tạo function để chuyển đổi theme và lưu vào cookie
  const switchTheme = useCallback(
    (newMode: string) => {
      // Cập nhật theme mode (lưu vào cookie)
      changeMode(newMode);

      // Chỉ cần set lại data-theme-mode attribute
      const rootElement = document.documentElement;
      rootElement.setAttribute('data-theme-mode', newMode);
    },
    [changeMode]
  );

  // FIXME: ghi đè lên renderer
  useMemo(() => {
    Object.keys(restRendererConfigs).forEach(key => {
      renderer[key as keyof IRenderer] = restRendererConfigs[key];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restRendererConfigs]);

  const renderCssVars = useCallback(() => {
    // FIXME: Check lại phần config
    if (theme.__cssVars) {
      renderRoot({
        renderer,
        // config: restRendererConfigs,
        selector: root,
        style: theme.__cssVars,
        mode,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(theme.__cssVars), mode]);

  if (!rendererRef.current) {
    rendererRef.current = true;

    if (typeof globalStyles === 'function') {
      globalStyles = globalStyles({ theme, renderer });
    }

    const { html: htmlStyle = {}, body: bodyStyle = {}, ...staticStyle }: any = globalStyles;

    renderer.renderStatic(
      {
        // scrollbarColor: 'hsl(0, 0%, 67%) transparent',
        ...htmlStyle,
      },
      'html'
    );

    renderer.renderStatic(
      {
        margin: 0,
        ...bodyStyle,
      },
      'body'
    );

    const lightName = THEME_MODE.LIGHT;

    const lightConfig = modes?.[lightName] || themeConfig;

    const lightCss = {
      backgroundColor: '#ffffff',
      color: '#1a1a1a',
      // colorScheme: 'light'
    };

    const darkName = THEME_MODE.DARK;

    // const darkConfig = mode?.[darkName] || {};

    const darkCss = {
      backgroundColor: '#000000',
      color: '#ffffff',
      // colorScheme: 'dark'
    };

    renderer.renderStatic(
      theme.__cssVarsByMode?.[lightName] || {},
      `${root}[data-theme-mode="${lightName}"]`
    );
    renderer.renderStatic(
      theme.__cssVarsByMode?.[darkName] || {},
      `${root}[data-theme-mode=${darkName}]`
    );

    const staticKeys = Object.keys(staticStyle);

    if (staticKeys.length > 0) {
      staticKeys.forEach(key => {
        renderer.renderStatic(staticStyle[key], key);
      });
    }

    renderCssVars();

    if (typeof themeRenderer === 'function') {
      themeRenderer(renderer);
    }
  }

  globalProps.changeMode = changeMode;
  globalProps.switchTheme = switchTheme;

  useEffect(() => {
    renderCssVars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(theme.__cssVars)]);

  useEffect(() => {
    const element = document.documentElement;
    element.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <FelaRendererProvider {...rendererProviderProps} renderer={renderer}>
      <ThemeProvider
        theme={{
          ...theme,
          cookies,
          deviceMode,
          themeMode,
          globalProps,
        }}
      >
        {children}
        {extra}
      </ThemeProvider>
    </FelaRendererProvider>
  );
};

export default SigmaUIProvider;
