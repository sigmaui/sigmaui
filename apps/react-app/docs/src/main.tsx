import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createRouter } from './router';
import App from './App.tsx';

const router = createRouter({
  App
});

const app = (
  <RouterProvider
    router={router}
  />
);

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(app)