import React, { Fragment, useState } from 'react';
import Box from '@microui-kit/box';
import Select from '@sigmaui-kit/select';
import ComponentPreview from '@docs/components/ComponentPreview';
import code from './code';

export const Demo: React.FC<any> = () => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <Select
        allowClear
        placeholder="Select size Select size Select size Select size"
        options={[
          {
            label: 'Small Small Small Small Small Small',
            value: 'small',
            // disabled: true
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
        ]}
        _style={{
          wrapper: {
            width: 200,
          },
        }}
      />
      <Select
        allowClear
        mode="multiple"
        placeholder="Multiple selection"
        options={[
          {
            label: 'Small Small Small Small Small Small',
            value: 'small',
            // disabled: true
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
          {
            label: 'Large2',
            value: 'large2',
          },
          {
            label: 'Large3',
            value: 'large3',
          },
          {
            label: 'Large4',
            value: 'large4',
          },
          {
            label: 'Large5',
            value: 'large5',
          },
        ]}
        _style={{
          wrapper: {
            width: 200,
          },
        }}
      />
      <Select
        allowClear
        mode="tags"
        placeholder="Tags mode"
        options={[
          {
            label: 'Small Small Small Small Small Small',
            value: 'small',
            // disabled: true
          },
          {
            label: 'Middle',
            value: 'middle',
          },
          {
            label: 'Large',
            value: 'large',
          },
          {
            label: 'Large2',
            value: 'large2',
          },
          {
            label: 'Large3',
            value: 'large3',
          },
          {
            label: 'Large4',
            value: 'large4',
          },
          {
            label: 'Large5',
            value: 'large5',
          },
        ]}
        _style={{
          wrapper: {
            width: 200,
          },
        }}
      />
    </Box>
  );
};
export default function Usage() {
  const [value, setValue] = useState<number[] | undefined>(undefined);
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
