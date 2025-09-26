import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createRenderer } from '@microui-kit/create-renderer';
import { PlatformProvider } from '@microui-kit/platform';
import { Locales } from '@sigmaui-kit/locale';
import { felaRendererConfig } from 'packages/common/theme/config';

import en from './locales/en';

const renderer = createRenderer(felaRendererConfig);

import { createRouter } from './router';
import App from './App';

const router = createRouter({
  renderer,
  App,
});

Locales.__INIT__(en);

const app = (
  <PlatformProvider>
    <RouterProvider router={router} />
  </PlatformProvider>
);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(app);
