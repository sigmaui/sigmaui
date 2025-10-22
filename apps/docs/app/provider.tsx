'use client';

import React from 'react';
import { SigmaThemeProvider } from '@sigma-ui-kit/theme';

import { themeConfig } from '../theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SigmaThemeProvider ssr themeConfig={themeConfig}>
      {children}
    </SigmaThemeProvider>
  );
}
