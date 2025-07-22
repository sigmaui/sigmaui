import type { StylesObject } from 'packages/common/types';

export const inputVariants = {
  Input: {} as StylesObject
}

export const buttonVariants = {
  Button: {
    solid: {
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: 1,

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: 'base'
      }
    },
    outlined: {
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderWidth: 1,

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: 'base'
      }
    },
    dashed: {
      borderStyle: 'dashed',
      backgroundColor: 'transparent',
      borderWidth: 1,

      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: 'base'
      }
    },
    filled: {},
    text: {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: '#f1f1f1'
      }
    },
    link: {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: 'transparent',
        color: 'base'
      }
    }
  } as StylesObject
}

export const variants = {
  solid: {},
  outlined: {},
  dashed: {},
  filled: {},
  text: {},
  link: {},
  ...inputVariants,
  ...buttonVariants
}