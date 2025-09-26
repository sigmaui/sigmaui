import React, { useState } from 'react';
import Loading from '@sigmaui-kit/loading';
import ComponentPreview from '@docs/components/ComponentPreview';
import code from './code';

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control);

  return (
    <Loading
      dot
      // size={30}
    />
  );
};
export default function DotsLoadingComponent() {
  const [value, setValue] = useState<number[] | undefined>(undefined);
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
