'use client';

import React from 'react';

import { MEDIA } from './constants';
import { ThemeScript } from './ThemeScript';
import type { Attribute, ThemeModeProviderProps, UseThemeModeProps } from './types';
import { disableAnimation, getSystemThemeMode, getThemeMode } from './helpers';
import { saveToLS } from './utils';

const colorSchemes = ['light', 'dark'];
const ThemeModeContext = React.createContext<UseThemeModeProps | undefined>(undefined);
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-function
const defaultContext: UseThemeModeProps = { changeThemeMode: (_: any) => {}, themeModes: [] };

export const useThemeMode = () => React.useContext(ThemeModeContext) ?? defaultContext;

export const ThemeModeProvider = (props: ThemeModeProviderProps) => {
  const context = React.useContext(ThemeModeContext);

  // Ignore nested context providers, just passthrough children
  if (context) return <>{props.children}</>;
  return <Theme {...props} />;
};

const defaultThemeModes = ['light', 'dark'];

const Theme = ({
  forcedThemeMode,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = 'theme',
  themeModes = defaultThemeModes,
  defaultThemeMode = enableSystem ? 'system' : 'light',
  attribute = 'data-theme',
  value,
  children,
  nonce,
  scriptProps,
}: ThemeModeProviderProps) => {
  const [themeMode, setThemeMode] = React.useState(() =>
    getThemeMode(storageKey, defaultThemeMode)
  );
  const [resolvedThemeMode, setResolvedThemeMode] = React.useState(() =>
    themeMode === 'system' ? getSystemThemeMode() : themeMode
  );
  const attrs = !value ? themeModes : Object.values(value);

  const applyTheme = React.useCallback(
    (mode: string) => {
      let resolvedMode = mode;
      if (!resolvedMode) return;

      // If theme is system, resolve it before setting theme
      if (mode === 'system' && enableSystem) {
        resolvedMode = getSystemThemeMode();
      }

      const name = value ? value[resolvedMode] : resolvedMode;
      const enable = disableTransitionOnChange ? disableAnimation(nonce) : null;
      const d = document.documentElement;

      const handleAttribute = (attr: Attribute) => {
        if (attr === 'class') {
          d.classList.remove(...attrs);
          if (name) d.classList.add(name);
        } else if (attr.startsWith('data-')) {
          if (name) {
            d.setAttribute(attr, name);
          } else {
            d.removeAttribute(attr);
          }
        }
      };

      if (Array.isArray(attribute)) attribute.forEach(handleAttribute);
      else handleAttribute(attribute);

      if (enableColorScheme) {
        const fallback = colorSchemes.includes(defaultThemeMode) ? defaultThemeMode : null;
        const colorScheme = colorSchemes.includes(resolvedMode) ? resolvedMode : fallback;
        // @ts-ignore
        d.style.colorScheme = colorScheme;
      }

      enable?.();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nonce]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeThemeMode = React.useCallback((value: any) => {
    if (typeof value === 'function') {
      setThemeMode(prevTheme => {
        const newTheme = value(prevTheme);

        saveToLS(storageKey, newTheme);

        return newTheme;
      });
    } else {
      setThemeMode(value);
      saveToLS(storageKey, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemThemeMode(e);
      setResolvedThemeMode(resolved);

      if (themeMode === 'system' && enableSystem && !forcedThemeMode) {
        applyTheme('system');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeMode, forcedThemeMode]
  );

  // Always listen to System preference
  React.useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      if (!e.newValue) {
        changeThemeMode(defaultThemeMode);
      } else {
        setThemeMode(e.newValue); // Direct state update to avoid loops
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeThemeMode]);

  // Whenever theme or forcedTheme changes, apply it
  React.useEffect(() => {
    applyTheme(forcedThemeMode ?? themeMode ?? 'system');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forcedThemeMode, themeMode]);

  const providerValue = React.useMemo(
    () => ({
      themeMode,
      changeThemeMode,
      forcedThemeMode,
      resolvedThemeMode: themeMode === 'system' ? resolvedThemeMode : themeMode,
      themeModes: enableSystem ? [...themeModes, 'system'] : themeModes,
      systemThemeMode: (enableSystem ? resolvedThemeMode : undefined) as
        | 'light'
        | 'dark'
        | undefined,
    }),
    [themeMode, changeThemeMode, forcedThemeMode, resolvedThemeMode, enableSystem, themeModes]
  );

  return (
    <ThemeModeContext.Provider value={providerValue}>
      <ThemeScript
        {...{
          forcedThemeMode,
          storageKey,
          attribute,
          enableSystem,
          enableColorScheme,
          defaultThemeMode,
          value,
          themeModes,
          nonce,
          scriptProps,
        }}
      />
      {children}
    </ThemeModeContext.Provider>
  );
};
