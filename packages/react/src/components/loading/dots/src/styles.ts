import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper';

export const styles = ({ size = 12 }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  return {
    wrapper: {
      display: 'flex',
      gap: size / 2
    }
  }
}

export type LoadingDotsTypes = ReturnType<typeof styles>
export type LoadingDotsKeys = keyof LoadingDotsTypes

export type LoadingDotsProps = IProps<LoadingDotsTypes>
