import React, { useContext } from 'react';
import classNames from 'classnames';
import Box from '@microui-kit/box';
import useMicroUI from '@microui-kit/use-micro-ui';
import { ITheme } from '@packages/common/theme/config';
import { CodeContext } from '../CodeProvider';

type CodePreviewProps = {
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode;
};
const CodePreview = ({ prefixCls = 'sm-code-demo', className, children }: CodePreviewProps) => {
  const { theme }: { theme: ITheme } = useMicroUI();
  const { element } = useContext(CodeContext);
  return (
    <div className={classNames(prefixCls, className)}>
      <Box
        css={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 200,
        }}
      >
        {children || element}
      </Box>
    </div>
  );
};

CodePreview.displayName = 'CodePreview';

export default CodePreview;
