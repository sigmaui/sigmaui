import ComponentPreview from '@docs/components/ComponentPreview';
import Button from '@sigmaui-kit/button';
import { ThemeVariant } from '@packages/common/types';
import code from './code';
export default function Usage() {
  return (
    <ComponentPreview
      data={code}
      scope={{ import: { '@sigmaui-kit/button': Button } }}
    />
  );
}
