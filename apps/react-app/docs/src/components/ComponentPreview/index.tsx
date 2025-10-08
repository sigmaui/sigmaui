import React, { useState } from 'react';
import type { FC, JSX } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import useMicroUI from '@microui-kit/use-micro-ui';
import Button from '@sigmaui-kit/button';
import { styles } from './styles';
import { CodeEnum, ComponentPreviewProps, IData } from './types';
import { CodeEditor, CodeError, CodePreview } from '../common';
import { CodeProvider } from '../common/CodeProvider';

export const replaceProps = (code: string, input: Record<string, any>) => {
  return code.replace(/{props\.(\w+)}/g, (_, key) => {
    if (input[key] === '') {
      return `${key}`;
    }
    return Object.prototype.hasOwnProperty.call(input, key)
      ? `${key}="${input[key]}"`
      : `undefined`;
  });
};

export const transformTabsOptions = (
  data: IData,
  previewProps: Record<string, any>,
) => {
  return [
    {
      label: 'Typescript',
      value: CodeEnum.TYPESCRIPT,
      content: (
        <CodeEditor
          displayLang="React"
          content={data?.code?.[CodeEnum.TYPESCRIPT]}
        />
      ),
    },
    // {
    //   label: 'Javascript',
    //   value: CodeEnum.JAVASCRIPT,
    //   content: (
    //     <CodeEditor
    //       displayLang="Vue"
    //       content={replaceProps(data?.code?.[CodeEnum.JAVASCRIPT], previewProps)}
    //     />
    //   ),
    // },
  ];
};
const ComponentPreview = ({
  prefixCls = 'sm-component-preview',
  className,
  classes,
  data,
  scope,
  children,
}: ComponentPreviewProps) => {
  const { css } = useMicroUI();
  return (
    <CodeProvider code={data?.code?.[CodeEnum.TYPESCRIPT]} scope={scope}>
      <div className={classNames(prefixCls, className, classes?.wrapper)}>
        <CodePreview />
        <CodeEditor displayLang={CodeEnum.TYPESCRIPT} />
        <CodeError />
      </div>
    </CodeProvider>
  );
};

ComponentPreview.displayName = 'ComponentPreview';
export default withStyles<any>(styles)(ComponentPreview);
