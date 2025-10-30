import unit from '../unit';
import type { ArrowToken } from './roundedArrow';
import { genRoundedArrow } from './roundedArrow';

export const MAX_VERTICAL_CONTENT_RADIUS = 8;

export interface ArrowOffsetToken {
  /** @internal */
  arrowOffsetHorizontal: number;
  /** @internal */
  arrowOffsetVertical: number;
}

export function getArrowOffsetToken(options: {
  contentRadius: number;
  limitVerticalRadius?: boolean;
}): ArrowOffsetToken {
  const { contentRadius, limitVerticalRadius } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return { arrowOffsetHorizontal: arrowOffset, arrowOffsetVertical };
}

function isInject(valid: boolean, code: any): any {
  if (!valid) {
    return {};
  }
  return code;
}

export default function getArrowStyle(
  token: any,
  colorBg: string,
  options?: {
    arrowDistance?: number;
    arrowPlacement?: {
      left?: boolean;
      right?: boolean;
      top?: boolean;
      bottom?: boolean;
    };
  }
) {
  const { componentCls, boxShadowPopoverArrow, arrowOffsetVertical, arrowOffsetHorizontal } = token;

  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true,
    },
  } = options || {};

  return {
    // ============================ Basic ============================
    [`& ${componentCls}-arrow`]: {
      position: 'absolute',
      zIndex: 1, // lift it up so the menu wouldn't cask shadow on it
      display: 'block',

      ...genRoundedArrow(token, colorBg, boxShadowPopoverArrow),

      '&:before': {
        background: colorBg,
      },
    },

    // ========================== Placement ==========================
    // Here handle the arrow position and rotate stuff
    // >>>>> Top
    ...isInject(!!arrowPlacement.top, {
      [[
        `&${componentCls}-placement-topLeft > ${componentCls}-arrow`,
        `&${componentCls}-placement-topRight > ${componentCls}-arrow`,
      ].join(',')]: {
        bottom: arrowDistance,
        transform: 'translateY(100%) rotate(180deg)',
      },

      [`&${componentCls}-placement-top > ${componentCls}-arrow`]: {
        left: '50%',
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
      },

      [`&${componentCls}-placement-topLeft`]: {
        '--arrow-offset-horizontal': arrowOffsetHorizontal,

        [`& > ${componentCls}-arrow`]: {
          left: arrowOffsetHorizontal,
        },
      },

      [`&${componentCls}-placement-topRight`]: {
        '--arrow-offset-horizontal': `calc(100% - ${unit(arrowOffsetHorizontal)})`,

        [`& > ${componentCls}-arrow`]: {
          right: arrowOffsetHorizontal,
        },
      },
    }),

    // >>>>> Bottom
    ...isInject(!!arrowPlacement.bottom, {
      [[
        `&${componentCls}-placement-bottomLeft > ${componentCls}-arrow`,
        `&${componentCls}-placement-bottomRight > ${componentCls}-arrow`,
      ].join(',')]: {
        top: arrowDistance,
        transform: `translateY(-100%)`,
      },

      [`&${componentCls}-placement-bottom > ${componentCls}-arrow`]: {
        left: '50%',
        transform: `translateX(-50%) translateY(-100%)`,
      },

      [`&${componentCls}-placement-bottomLeft`]: {
        '--arrow-offset-horizontal': arrowOffsetHorizontal,

        [`& > ${componentCls}-arrow`]: {
          left: arrowOffsetHorizontal,
        },
      },

      [`&${componentCls}-placement-bottomRight`]: {
        '--arrow-offset-horizontal': `calc(100% - ${unit(arrowOffsetHorizontal)})`,

        [`& > ${componentCls}-arrow`]: {
          right: arrowOffsetHorizontal,
        },
      },
    }),

    // >>>>> Left
    ...isInject(!!arrowPlacement.left, {
      [[
        `&${componentCls}-placement-leftTop > ${componentCls}-arrow`,
        `&${componentCls}-placement-leftBottom > ${componentCls}-arrow`,
      ].join(',')]: {
        right: arrowDistance,
        transform: 'translateX(100%) rotate(90deg)',
      },

      [`&${componentCls}-placement-left > ${componentCls}-arrow`]: {
        top: '50%',
        transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
      },

      [`&${componentCls}-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical,
        right: arrowDistance,
        transform: 'translateX(100%) rotate(90deg)',
      },

      [`&${componentCls}-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical,
      },
    }),

    // >>>>> Right
    ...isInject(!!arrowPlacement.right, {
      [[
        `&${componentCls}-placement-rightTop > ${componentCls}-arrow`,
        `&${componentCls}-placement-rightBottom > ${componentCls}-arrow`,
      ].join(',')]: {
        left: arrowDistance,
        transform: 'translateX(-100%) rotate(-90deg)',
      },

      [`&${componentCls}-placement-right > ${componentCls}-arrow`]: {
        top: '50%',
        transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
      },

      [`&${componentCls}-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical,
      },

      [`&${componentCls}-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical,
      },
    }),
  };
}
