import React from 'react';
import type { StyleFn, StylesObject } from '@sigma-ui-kit/theme';

import type { ColProps, SemanticName as ColSemanticName } from '../col';
import type { RowProps, SemanticName as RowSemanticName } from '../row';

const gridColumns = 24;

const genLoopGridColumnsStyle = (
  prefixCls: string,
  componentCls: string,
  sizeCls: string
): StylesObject => {
  // const { prefixCls, componentCls, gridColumns } = token;

  const gridColumnsStyle: any = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`&${componentCls}${sizeCls}-${i}`] = {
        display: 'none',
      };
      gridColumnsStyle[`&${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto',
      };
      gridColumnsStyle[`&${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto',
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto',
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto',
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0,
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-order-${i}`] = {
        order: 0,
      };
    } else {
      gridColumnsStyle[`&${componentCls}${sizeCls}-${i}`] = {
        // https://github.com/ant-design/ant-design/issues/44456
        // Form set `display: flex` on Col which will override `display: block`.
        // Let's get it from css variable to support override.
        // ['--ant-display' as any]: 'block',
        // // Fallback to display if variable not support
        // display: 'block',
        // display: 'var(--ant-display)',
        flex: `0 0 ${(i / gridColumns) * 100}%`,
        maxWidth: `${(i / gridColumns) * 100}%`,
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${(i / gridColumns) * 100}%`,
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${(i / gridColumns) * 100}%`,
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${(i / gridColumns) * 100}%`,
      };
      gridColumnsStyle[`&${componentCls}${sizeCls}-order-${i}`] = {
        order: i,
      };
    }
  }

  // Flex CSS Var
  gridColumnsStyle[`&${componentCls}${sizeCls}-flex`] = {
    flex: `var(--${prefixCls}${sizeCls}-flex)`,
  };

  return gridColumnsStyle;
};

const genGridStyle = (prefixCls: string, componentCls: string, sizeCls: string): StylesObject =>
  genLoopGridColumnsStyle(prefixCls, componentCls, sizeCls);

const genGridMediaStyle = (
  prefixCls: string,
  componentCls: string,
  screenSize: number,
  sizeCls: string
): StylesObject => ({
  [`@media (min-width: ${screenSize}px)`]: {
    ...genGridStyle(prefixCls, componentCls, sizeCls),
  },
});

export const colStyleFn: StyleFn<ColProps, ColSemanticName> = props => {
  const { tokens, componentCls } = props;

  const gridStyle = genGridStyle('sm-col', componentCls, '');

  console.log(gridStyle);

  return {
    root: {
      root: {
        position: 'relative',
        maxWidth: '100%',
        // Prevent columns from collapsing when empty
        minHeight: 1,
        ...gridStyle,
      },
    },
  };
};

export const rowStyleFn: StyleFn<RowProps, RowSemanticName> = props => {
  const { tokens, componentCls } = props;
  return {
    root: {
      root: {
        display: 'flex',
        flexFlow: 'row wrap',
        minWidth: 0,

        '&::before, &::after': {
          display: 'flex',
        },

        [`${componentCls}-no-wrap`]: {
          flexWrap: 'nowrap',
        },

        // The origin of the X-axis
        [`${componentCls}-start`]: {
          justifyContent: 'flex-start',
        },

        // The center of the X-axis
        [`${componentCls}-center`]: {
          justifyContent: 'center',
        },

        // The opposite of the X-axis
        [`${componentCls}-end`]: {
          justifyContent: 'flex-end',
        },

        [`${componentCls}-space-between`]: {
          justifyContent: 'space-between',
        },

        [`${componentCls}-space-around`]: {
          justifyContent: 'space-around',
        },

        [`${componentCls}-space-evenly`]: {
          justifyContent: 'space-evenly',
        },

        // Align at the top
        [`${componentCls}-top`]: {
          alignItems: 'flex-start',
        },

        // Align at the center
        [`${componentCls}-middle`]: {
          alignItems: 'center',
        },

        [`${componentCls}-bottom`]: {
          alignItems: 'flex-end',
        },
      },
    },
  };
};
