import { type ReactNode, useMemo } from 'react';
import { usePlatformDetect } from '@sigma-ui-kit/hooks';

import { adapters } from './adapters';
import type { ThemeConfig } from './types';
import getTheme from './getTheme';

export interface SigmaThemeProviderProps {
  themeConfig?: ThemeConfig;
  prefixCls?: string;
  children: ReactNode;
  ssr?: boolean;
}

export function SigmaThemeProvider({
  children,
  themeConfig = {},
  prefixCls = 'sm',
  ssr = false,
}: SigmaThemeProviderProps) {
  const { modeConfig = {}, deviceConfig = {}, overrideComponents = {} } = themeConfig;

  const { platform } = usePlatformDetect();
  const deviceMode = platform?.device || '';

  // Load saved theme from localStorage

  // Listen for system theme changes

  const theme = useMemo(
    () =>
      getTheme(
        { modeConfig, deviceConfig },
        {
          deviceMode,
          prefixCls,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeConfig]
  );

  const Provider = useMemo(() => adapters['fela'], []);

  return (
    <Provider theme={{ ...theme, overrideComponents, prefixCls }} ssr={ssr}>
      {children}
    </Provider>
  );
}
