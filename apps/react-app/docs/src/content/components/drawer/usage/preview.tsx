import React from 'react';
import ComponentPreview from '@docs/components/ComponentPreview';
import Drawer from '@sigmaui-kit/drawer';
import Button from '@sigmaui-kit/button';
import code from './code';
export default function UsageDrawer() {
  return (
    <ComponentPreview
      data={code}
      scope={{
        import: {
          '@sigmaui-kit/drawer': Drawer,
          '@sigmaui-kit/button': Button,
          react: React,
        },
      }}
    />
  );
}
