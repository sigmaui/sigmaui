import React from 'react';
import ComponentPreview from '@docs/components/ComponentPreview';
import Number from '@sigmaui-kit/input-number';
import code from './code';

export default function NumberComponent() {
  return (
    <>
      <ComponentPreview
        data={code}
        scope={{ import: { '@sigmaui-kit/input-number': Number } }}
      />
    </>
  );
}
