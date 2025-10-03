import React, { useContext, useEffect, useId, useRef } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { withStyles } from '@microui-kit/with-styles';
import './prism.css';
import { PrismClass } from '@docs/utils/prism.constant';
import { CodeEditor as LiveCodeEditor } from 'react-live-runner';
import { useMicroUI } from '@microui-kit/use-micro-ui';
import { copyToClipboard } from '@docs/utils/copyToClipboard';
import Tooltip from '@sigmaui-kit/tooltip';
import Box from '@microui-kit/box';
import { styles } from './styles';
import { CodeEditorProps } from './types';
import { useCopied } from './useCopied';
import { CodeContext } from '../CodeProvider';

const CodeEditor: FC<CodeEditorProps> = ({ prefixCls = 'sm-code-editor', className, classes }) => {
  const { codeContent, setCodeContent } = useContext(CodeContext);
  const { copied, setCopied, onCopy, icon } = useCopied();
  const { css, theme } = useMicroUI();
  const id = useId();
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <LiveCodeEditor
        value={codeContent}
        className={css({
          borderRadius: '8px',
        })}
        onChange={setCodeContent}
      />
      <Box
        css={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <Tooltip
          overlay="Copy"
          placement="top"
        >
          <button
            id={id}
            className={css({
              outline: 'none',
              border: 'none',
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: '',
              color: 'white',
              padding: 4,
              shadow: 'sm',
              background: theme.colors.placeholder,
              transition: 'background 0.3s ease',
              borderRadius: '4px',
              ':hover': {
                background: theme.colors.button.background,
              },
            })}
            onClick={() => onCopy(codeContent)}
          >
            {icon}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </Tooltip>
      </Box>
    </div>
  );
};

CodeEditor.displayName = 'CodeEditor';

export default withStyles<CodeEditorProps>(styles)(CodeEditor);
