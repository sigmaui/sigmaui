import React, { JSX, memo } from 'react';
import Tabs from '@sigmaui-kit/tabs';
import { TabsProps } from '@packages/common/components/tabs/styles';
import Box from '@microui-kit/box';
import { CSSProperties } from 'fela';
import { IData } from '../types';
import { transformTabsOptions } from '..';
type CodeContentProps = {
  data: IData;
  containerClass?: CSSProperties;
} & Omit<TabsProps, 'options'>;

const CodeContent = ({ data, containerClass, previewProps, ...restProps }: CodeContentProps) => {
  return (
    <Box css={containerClass}>
      <Tabs
        _style={{
          trigger: {
            color: 'white',
          },
        }}
        options={transformTabsOptions(data, previewProps)}
        {...restProps}
      />
    </Box>
  );
};

export default memo(CodeContent) as ({
  data,
  containerClass,
  previewProps,
  ...restProps
}: CodeContentProps) => JSX.Element;
