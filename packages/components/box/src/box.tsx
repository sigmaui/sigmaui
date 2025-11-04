import type { StylesObject, Tokens } from '@sigma-ui-kit/theme';
import React from 'react';
import { useFela, type IStyle } from 'react-fela';

// --- Kiểu base cho các props style bạn muốn hỗ trợ ---
type BoxStyleProps = {
  padding?: number | string;
  margin?: number | string;
  backgroundColor?: string;
  color?: string;
  display?: string;
  flex?: string | number;
};

// --- Generic type cho prop "as" ---
type BoxProps<E extends React.ElementType> = {
  as?: E;
  children?: React.ReactNode;
  styles: (tokens: Tokens, componentCls: string) => StylesObject;
} & BoxStyleProps &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BoxStyleProps | 'as'>;

// --- Component chính ---
export const Box = React.forwardRef(
  <E extends React.ElementType = 'div'>(
    { as, children, style, ...rest }: BoxProps<E>,
    ref: React.Ref<Element>
  ) => {
    const { css } = useFela();

    // Tách riêng style props
    const styleProps: IStyle = {};
    for (const key in rest) {
      if (['padding', 'margin', 'backgroundColor', 'color', 'display', 'flex'].includes(key)) {
        styleProps[key as keyof IStyle] = rest[key];
        delete (rest as any)[key];
      }
    }

    const Component = as || 'div';
    const className = css(styleProps);

    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
