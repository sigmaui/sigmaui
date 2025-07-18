import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { PlatformProvider } from '@microui-kit/platform';

import { createRouter } from './router';
import App from './App';

const router = createRouter({
  App
});

const app = (
  <PlatformProvider>
    <RouterProvider
      router={router}
    />
  </PlatformProvider>
);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(app)