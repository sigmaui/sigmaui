'use client';

import type { ReactNode } from 'react';
import { SigmaThemeProvider } from '@sigma-ui-kit/theme';

import { themeConfig } from '../theme';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SigmaThemeProvider ssr themeConfig={themeConfig}>
      {children}
    </SigmaThemeProvider>
  );
}
