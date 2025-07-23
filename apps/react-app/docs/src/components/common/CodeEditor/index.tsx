import React, { useEffect, useRef } from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { withStyles } from '@microui-kit/with-styles'
import './prism.css'
import { styles } from './styles'
import { CodeEditorProps } from './types'
import { PrismClass } from '@docs/utils/prism.constant'

const CodeEditor: FC<CodeEditorProps> = ({
  prefixCls = 'sm-code-editor',
  className,
  classes,
  content,
  language = 'tsx',
  displayLang,
  lineNumbers = true,
}) => {
  useEffect(() => {
    window.Prism.highlightAll()
  }, [content, language])
  return (
    <div className={classNames(prefixCls, className, classes?.wrapper)}>
      <pre
        data-language={displayLang}
        className={lineNumbers ? PrismClass.Line_numbers : ''}
      >
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  )
}

CodeEditor.displayName = 'CodeEditor'

export default withStyles<CodeEditorProps>(styles)(CodeEditor)
