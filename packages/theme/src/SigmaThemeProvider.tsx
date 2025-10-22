import React, { type ReactNode, useMemo } from 'react';
import { usePlatformDetect } from '@sigma-ui-kit/hooks';

import { adapters } from './adapters';
import type { ThemeConfig } from './types';
import getTheme from './getTheme';

export interface SigmaThemeProviderProps {
  themeConfig?: ThemeConfig;
  prefix?: string;
  children: ReactNode;
  ssr?: boolean;
}

export function SigmaThemeProvider({
  children,
  themeConfig = {},
  prefix = 'sm',
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
          prefix,
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeConfig]
  );

  const Provider = useMemo(() => adapters['fela'], []);

  return (
    <Provider theme={{ ...theme, overrideComponents }} ssr={ssr}>
      {children}
    </Provider>
  );
}
