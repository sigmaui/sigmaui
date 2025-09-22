import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'extra' | 'popup' | 'list' | 'listTitle';

export const styles = ({ prefixCls, layout = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme);
  const wrapperStyle: StylesProperties = {};
  const extraStyle: StylesProperties = {
    width: '100%'
  };
  const col = layout?.col;

  if (col) {
    wrapperStyle.display = 'flex';
    wrapperStyle.flexWrap = 'wrap';
    wrapperStyle.width = '100%';

    const space = layout.space || 12;
    const halfSpace = space / 2;

    wrapperStyle.marginLeft = halfSpace * -1;
    wrapperStyle.marginRight = halfSpace * -1;

    wrapperStyle[`& .${prefixCls}-item`] = {
      width: `${100 / col}%`,
      paddingInline: halfSpace
    }
    extraStyle.paddingInline = halfSpace;
  }

  return {
    wrapper: wrapperStyle,
    extra: extraStyle
  }
}

export type FormTypes = ReturnType<typeof styles>
export type FormKeys = keyof FormTypes

export type FormProps = IProps<FormTypes>
