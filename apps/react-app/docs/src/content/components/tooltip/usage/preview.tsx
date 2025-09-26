import React from 'react';
import Box from '@microui-kit/box';
import ComponentPreview from '@docs/components/ComponentPreview';
import Tooltip from '@sigmaui-kit/tooltip';
import Button from '@sigmaui-kit/button';
import code from './code';

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <Tooltip
        overlay="Tooltip"
        placement="top"
      >
        <Button>Tooltip</Button>
      </Tooltip>
    </Box>
  );
};
export default function Usage() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
