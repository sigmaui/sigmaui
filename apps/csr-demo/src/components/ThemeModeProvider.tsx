import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light' | 'system';

type ThemeModeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
};

type ThemeModeProviderState = {
  themeMode: ThemeMode;
  changeThemeMode: (theme: ThemeMode) => void;
};

const initialState: ThemeModeProviderState = {
  themeMode: 'system',
  changeThemeMode: () => null,
};

const ThemeModeProviderContext = createContext<ThemeModeProviderState>(initialState);

export function ThemeModeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeModeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    () => (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (themeMode === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.setAttribute('data-theme', systemTheme);
      return;
    }

    root.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  const value = {
    themeMode,
    changeThemeMode: (theme: ThemeMode) => {
      localStorage.setItem(storageKey, theme);
      setThemeMode(theme);
    },
  };

  return (
    <ThemeModeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeModeProviderContext.Provider>
  );
}

export const useThemeMode = () => {
  const context = useContext(ThemeModeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
