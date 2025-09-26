import React from 'react';
import ComponentPreview from '@docs/components/ComponentPreview';
import Number from '@sigmaui-kit/input-number';
import code from './code';

export const Demo: React.FC<any> = () => {
  return <Number placeholder="Number" />;
};
export default function NumberComponent() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
