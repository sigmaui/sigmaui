import { IProps } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
  }
}

export type CodeEditorTypes = ReturnType<typeof styles>
export type CodeEditorKeys = keyof CodeEditorTypes

export type CodeEditorProps = IProps<CodeEditorTypes>
