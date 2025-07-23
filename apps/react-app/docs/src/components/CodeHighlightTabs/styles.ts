import { IProps } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
  }
}

export type CodeHighlightTabsTypes = ReturnType<typeof styles>
export type CodeHighlightTabsKeys = keyof CodeHighlightTabsTypes

export type CodeHighlightTabsProps = IProps<CodeHighlightTabsTypes>
