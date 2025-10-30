import type { StyleFn } from '@sigma-ui-kit/theme';
import { initZoomMotion } from '@sigma-ui-kit/util/style/motion';
import { getArrowToken } from '@sigma-ui-kit/util/style/roundedArrow';
import getArrowStyle from '@sigma-ui-kit/util/style/placementArrow';

import type { SemanticName, TooltipProps } from './types';

const styleFn: StyleFn<TooltipProps, SemanticName> = props => {
  const { tokens, componentCls, renderer } = props;

  const zoomMotionStyle = initZoomMotion('sm', 'zoom-big-fast', renderer, true);

  const { arrowPath, arrowPolygon, arrowShadowWidth } = getArrowToken({
    sizePopupArrow: 16,
    borderRadiusXS: 2,
    borderRadiusOuter: 4,
  });

  const arrowStyle = getArrowStyle(
    {
      componentCls,
      sizePopupArrow: '16px',
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      arrowOffsetVertical: '8px',
      arrowOffsetHorizontal: '12px',
      arrowPath,
      arrowPolygon,
      arrowShadowWidth,
    },
    'var(--sm-colors-fill-strong)'
  );

  return {
    root: {
      root: {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        color: tokens.colors.text.strong,
        fontFamily: tokens.fonts,
        fontSize: tokens.fontSizes['text-xs'],
        fontWeight: tokens.fontWeights.regular,
        lineHeight: tokens.lineHeights['text-xs'],
        listStyle: 'none',

        position: 'absolute',
        zIndex: tokens.zIndices.popupBase + 70,
        display: 'block',
        width: 'max-content',
        maxWidth: 250,
        visibility: 'visible',

        // When use `autoArrow`, origin will follow the arrow position
        '--valid-offset-x': 'var(--arrow-offset-horizontal, var(--arrow-x))',
        transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(' '),

        [`&${componentCls}-hidden`]: {
          display: 'none',
        },

        ...arrowStyle,
        ...zoomMotionStyle,
      },
    },
    body: {
      root: {
        // minWidth: centerAlignMinWidth,
        // minHeight: controlHeight,
        paddingInline: tokens.buttons.paddingVertical.small,
        paddingBlock: tokens.buttons.paddingVertical.smaller,
        color: tokens.colors.text.inverse.strong,
        textAlign: 'start',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: tokens.colors.fill.strong,
        borderRadius: tokens.radii.md,
        boxSizing: 'border-box',
      },
    },
  };
};

export default styleFn;
