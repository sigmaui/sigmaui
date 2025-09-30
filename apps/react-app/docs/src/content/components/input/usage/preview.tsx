import ComponentPreview from '@docs/components/ComponentPreview';
import Input from '@sigmaui-kit/input';
import code from './code';
export default function UsageInputComponent() {
  return (
    <>
      <ComponentPreview
        data={code}
        scope={{ import: { '@sigmaui-kit/input': Input } }}
      />
    </>
  );
}
