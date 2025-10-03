import React from 'react';
import ComponentPreview from '@docs/components/ComponentPreview';
import Password from '@sigmaui-kit/password';
import code from './code';

export default function UsagePasswordComponent() {
  return (
    <>
      <ComponentPreview
        data={code}
        scope={{ import: { '@sigmaui-kit/password': Password } }}
      />
    </>
  );
}
