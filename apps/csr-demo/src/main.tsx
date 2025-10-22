import React from 'react';
import ReactDOM from 'react-dom/client';
import { SigmaThemeProvider } from '@sigma-ui-kit/theme';
import { themeConfig } from './theme';
import App from './App';
import './index.css';
import { ThemeModeProvider } from './components/ThemeModeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeModeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SigmaThemeProvider themeConfig={themeConfig} ssr={false}>
        <App />
      </SigmaThemeProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
