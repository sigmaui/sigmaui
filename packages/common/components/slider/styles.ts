import { ITheme } from 'packages/common/theme/config';
import { Theme } from '@microui-kit/theme';
import type { IProps, StylesProperties } from './types';

type ClassNames =
  | 'wrapper'
  | 'label'
  | 'valueText'
  | 'control'
  | 'track'
  | 'range'
  | 'thumb'
  | 'hiddenInput'
  | 'marker'
  | 'control-small'
  | 'control-large'
  | 'track-small'
  | 'track-large'
  | 'range-small'
  | 'range-large'
  | 'thumb-small'
  | 'thumb-large'
  | 'marker-small'
  | 'marker-large'
  | 'labelContainer';
export const styles: ({
  theme,
  renderer,
}: {
  theme: ITheme;
  renderer: any;
}) => Record<ClassNames, StylesProperties> = ({ theme, renderer }: { theme: ITheme; renderer: any }) => {
  const fadeIn = renderer.renderKeyframe(() => {
    return {
      '0%': {
        opacity: 0,
        transform: 'translateY(-4px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    };
  });
  const fadeOut = renderer.renderKeyframe(() => {
    return {
      '0%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: 0,
        transform: 'translateY(-4px)',
      },
    };
  });
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 240,
    },
    wrapperVertical: {
      flexDirection: 'row',
    },
    wrapperHorizontal: {
      flexDirection: 'column',
    },
    labelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    label: {
      fontWeight: 600,
    },
    valueText: {},
    control: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '50px',
      backgroundColor: theme.colors.bgEmphasized,
    },
    'control-small-vertical': {
      width: 6,
      height: 100,
    },
    'control-default-vertical': {
      width: 8,
      height: 100,
    },
    'control-large-vertical': {
      width: 10,
      height: 100,
    },
    'control-small': {
      height: 6,
    },
    'control-default': {
      height: 8,
    },
    'control-large': {
      height: 10,
    },
    'track-small': {
      height: 6,
    },
    'track-default': {
      height: 8,
    },
    'track-large': {
      height: 10,
    },
    track: {
      flex: 1,
      overflow: 'hidden',
      backgroundColor: theme.colors.bgEmphasized,
      borderRadius: '9999px',
    },
    'range-small': {
      height: 6,
    },
    'range-default': {
      height: 8,
    },
    'range-large': {
      height: 10,
    },
    range: {
      backgroundColor: theme.colors.base,
    },
    'thumb-small': {
      height: 10,
      width: 10,
    },
    'thumb-default': {
      height: 14,
      width: 14,
    },
    'thumb-large': {
      height: 18,
      width: 18,
    },
    thumb: {
      backgroundColor: 'white',
      border: `2px solid ${theme.colors.base}`,
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 1,
      outline: 'none',
    },
    hiddenInput: {},
    'marker-small': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'relative',
        transform: 'translateX(-50%)',
        left: '50%',
        backgroundColor: 'white',
        width: 3,
        height: 3,
        borderRadius: '50%',
        top: '-3.5px',
      },
    },
    'marker-default': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'relative',
        transform: 'translateX(-50%)',
        left: '50%',
        backgroundColor: 'white',
        width: 3,
        height: 3,
        borderRadius: '50%',
        top: '-5px',
      },
    },
    'marker-large': {
      '&:before': {
        content: '""',
        display: 'block',
        position: 'relative',
        transform: 'translateX(-50%)',
        left: '50%',
        backgroundColor: 'white',
        width: 4,
        height: 4,
        borderRadius: '50%',
        top: '-6.5px',
      },
    },
    marker: {
      visibility: 'visible',
      color: theme.colors.neutral,
      position: 'absolute',
      pointerEvents: 'none',
    },
  };
};
