import React from 'react';
import Box from '@microui-kit/box';
import ComponentPreview from '@docs/components/ComponentPreview';
import Tooltip from '@sigmaui-kit/tooltip';
import Button from '@sigmaui-kit/button';
import { tooltipContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}
    >
      <Tooltip
        overlay="Tooltip"
        placement="top"
      >
        <Button>
          Tooltip
        </Button>
      </Tooltip>
    </Box>
  )
}
export const UsageTooltipComponent = () => {
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={tooltipContent.usage}
        items={[
          {
            initialValue: 'small',
            prop: 'size',
            type: 'slider',
            defaultValue: [0],
            mappingData: {
              0: 'sm',
              50: 'md',
              100: 'lg',
            },
            label: 'Size',
            step: 50,
            marks: {
              items: [
                {
                  value: 0,
                },
                {
                  value: 50,
                },
                {
                  value: 100,
                },
              ],
            },
          },
        ]}
      >
        {({ control }) => <Demo control={control}/>}
      </ComponentPreview>
    </>
  )
}
