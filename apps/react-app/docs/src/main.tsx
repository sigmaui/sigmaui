import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createRenderer } from '@microui-kit/create-renderer';
import { PlatformProvider } from '@microui-kit/platform';
import themeConfig, { globalStyle, felaRendererConfig } from 'packages/common/theme/config';

const renderer = createRenderer(felaRendererConfig)

import { createRouter } from './router'
import App from './App'

const router = createRouter({
  renderer,
  App,
})

const app = (
  <PlatformProvider>
    <RouterProvider router={router}/>
  </PlatformProvider>
)

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(app)
