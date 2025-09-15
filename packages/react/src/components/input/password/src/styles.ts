import { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper'

export const styles = ({}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {}
  }
}

export type PasswordTypes = ReturnType<typeof styles>
export type PasswordKeys = keyof PasswordTypes

export type PasswordProps = IProps<PasswordTypes>
