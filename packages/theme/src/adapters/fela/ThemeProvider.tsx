import { type PropsWithChildren } from 'react';

import Registry from './Registry';
import type { Theme } from '../../types';

type ThemeProviderProps = {
  theme: Theme;
  ssr: boolean;
};
function ThemeProvider({ theme, ssr, children }: PropsWithChildren<ThemeProviderProps>) {
  return (
    <Registry theme={theme} ssr={ssr}>
      {children}
    </Registry>
  );
}

export default ThemeProvider;
