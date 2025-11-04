'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo, useEffect, useRef } from 'react';
import {
  RendererProvider,
  ThemeProvider as FelaThemeProvider,
  ThemeContext as FelaThemeContext,
} from 'react-fela';
import { createRenderer } from 'fela';
import type { IRenderer } from 'fela';
import { renderToString } from 'fela-tools';
import prefixer from 'fela-plugin-prefixer';
import multipleSelectors from 'fela-plugin-multiple-selectors';
import unit from 'fela-plugin-unit';

import type { ComputedTheme } from '../../getTheme';

// Try import useServerInsertedHTML (Next.js App Router)
let useServerInsertedHTML: ((callback: () => React.ReactNode) => void) | undefined;
try {
  useServerInsertedHTML = require('next/navigation').useServerInsertedHTML;
} catch {
  useServerInsertedHTML = undefined;
}

type RegistryProps = {
  theme: ComputedTheme & {
    __cssVars?: Record<string, string>;
    __cssVarsByMode?: Record<string, Record<string, string>>;
  };
  ssr: boolean;
};

// Global renderer cache for client
let clientRenderer: IRenderer | null = null;

function getRenderer(ssr: boolean): IRenderer {
  if (ssr) {
    // Server: create new renderer per request
    return createRenderer({ plugins: [prefixer(), multipleSelectors(), unit()] });
  }
  // Client: reuse global renderer
  if (!clientRenderer) clientRenderer = createRenderer({});
  return clientRenderer;
}

// Generate CSS variables
function generateCSSVars(theme: RegistryProps['theme']): string {
  if (!theme) return '';
  const lines: string[] = [];

  if (theme.__cssVars) {
    const rootVars = Object.entries(theme.__cssVars)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');
    lines.push(`:root {\n${rootVars}\n}`);
  }

  if (theme.__cssVarsByMode) {
    for (const [mode, vars] of Object.entries(theme.__cssVarsByMode)) {
      const modeVars = Object.entries(vars)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n');
      lines.push(`[data-theme="${mode}"] {\n${modeVars}\n}`);
    }
  }

  return lines.join('\n\n');
}

export default function Registry({ theme, ssr, children }: PropsWithChildren<RegistryProps>) {
  const renderer = useMemo(() => getRenderer(ssr), [ssr]);
  const cssVarsHTML = useMemo(() => generateCSSVars(theme), [theme]);

  // Ref để đảm bảo chỉ insert SSR style 1 lần
  const insertedRef = useRef(false);

  // SSR: insert Fela CSS + theme vars
  if (ssr && useServerInsertedHTML && !insertedRef.current) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useServerInsertedHTML(() => {
      insertedRef.current = true;
      try {
        const felaCSS = renderToString(renderer);
        const combined = `
        ${cssVarsHTML || ''}
${felaCSS || ''}
        `.trim();

        return combined ? (
          <style
            id="fela-ssr"
            data-fela-priority="-1000"
            dangerouslySetInnerHTML={{ __html: combined }}
          />
        ) : null;
      } catch {
        return null;
      }
    });
  }

  // CSR: inject theme vars
  useEffect(() => {
    if (!ssr && cssVarsHTML) {
      let styleEl = document.getElementById('theme-vars') as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-vars';
        document.head.appendChild(styleEl);
      }
      styleEl.innerHTML = cssVarsHTML;

      // Cleanup optional: remove when unmount
      return () => {
        styleEl?.remove();
      };
    }
  }, [cssVarsHTML, ssr]);

  return (
    <RendererProvider renderer={renderer}>
      <FelaThemeContext.Provider value={theme}>{children}</FelaThemeContext.Provider>
    </RendererProvider>
  );
}
