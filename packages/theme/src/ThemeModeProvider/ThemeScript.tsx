import React from 'react';

import type { ThemeModeProviderProps } from './types';

// Inlined script logic (migrated from ./next-theme/script.js)
function inlineThemeScript(
  attribute: string | string[] | undefined,
  storageKey: string,
  defaultThemeMode: string,
  forcedThemeMode: string | undefined,
  themeModes: string[] = ['light', 'dark'],
  value: Record<string, string> | undefined,
  enableSystem: boolean | undefined,
  enableColorScheme: boolean | undefined
) {
  const el = document.documentElement;
  const systemThemes = ['light', 'dark'];

  function updateDOM(theme: string) {
    const attributes = Array.isArray(attribute) ? attribute : [attribute || 'data-theme'];

    attributes.forEach(attr => {
      const isClass = attr === 'class';
      const classes = isClass && value ? themeModes.map(t => (value as any)[t] || t) : themeModes;
      if (isClass) {
        // Remove all theme classes then add the new one
        el.classList.remove(...(classes as string[]));
        el.classList.add(value && (value as any)[theme] ? (value as any)[theme] : theme);
      } else {
        el.setAttribute(attr as string, theme);
      }
    });

    setColorScheme(theme);
  }

  function setColorScheme(theme: string) {
    if (enableColorScheme && systemThemes.includes(theme)) {
      (el as HTMLElement).style.colorScheme = theme as any;
    }
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (forcedThemeMode) {
    updateDOM(forcedThemeMode);
  } else {
    try {
      const themeName = localStorage.getItem(storageKey) || defaultThemeMode;
      const isSystem = !!enableSystem && themeName === 'system';
      const theme = isSystem ? getSystemTheme() : themeName;
      updateDOM(theme);
    } catch {
      // ignore
    }
  }
}

// eslint-disable-next-line react/display-name
export const ThemeScript = React.memo(
  ({
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
  }: Omit<ThemeModeProviderProps, 'children'> & { defaultThemeMode: string }) => {
    const scriptArgs = JSON.stringify([
      attribute,
      storageKey,
      defaultThemeMode,
      forcedThemeMode,
      themeModes,
      value,
      enableSystem,
      enableColorScheme,
    ]).slice(1, -1);

    return (
      <script
        {...scriptProps}
        suppressHydrationWarning
        nonce={typeof window === 'undefined' ? nonce : ''}
        dangerouslySetInnerHTML={{ __html: `(${inlineThemeScript.toString()})(${scriptArgs})` }}
      />
    );
  }
);
