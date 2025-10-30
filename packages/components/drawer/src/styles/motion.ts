import type React from 'react';

interface GenMotionParams {
  componentCls: string;
  motionDuration?: string;
}

const genMaskMotionStyle = ({ componentCls, motionDuration = '0.3s' }: GenMotionParams) => {
  const styles: Record<string, React.CSSProperties> = {};
  styles[
    `& ${componentCls}-mask-motion-enter, & ${componentCls}-mask-motion-appear, & ${componentCls}-mask-motion-leave-start`
  ] = {
    transition: 'none',
  };
  styles[
    `& ${componentCls}-mask-motion-enter-active, & ${componentCls}-mask-motion-appear-active, & ${componentCls}-mask-motion-leave-active`
  ] = {
    transition: `all ${motionDuration}`,
  };
  styles[`& ${componentCls}-mask-motion-enter, & ${componentCls}-mask-motion-appear`] = {
    opacity: 0,
  };
  styles[
    `& ${componentCls}-mask-motion-enter-active, & ${componentCls}-mask-motion-appear-active`
  ] = { opacity: 1 };
  styles[`& ${componentCls}-mask-motion-leave`] = { opacity: 1 };
  styles[`& ${componentCls}-mask-motion-leave-active`] = { opacity: 0 };
  return styles;
};

const transformMap: Record<'right' | 'left' | 'top' | 'bottom', string> = {
  right: 'translateX(100%)',
  left: 'translateX(-100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
};

const genPanelMotionStyle = ({ componentCls, motionDuration = '0.3s' }: GenMotionParams) => {
  const styles: Record<string, React.CSSProperties> = {};

  ['right', 'left', 'top', 'bottom'].forEach(dir => {
    const prefix = `${componentCls}-panel-motion-${dir}`;
    styles[`& ${prefix}-enter, & ${prefix}-appear, & ${prefix}-leave-start`] = {
      transition: 'none',
    };
    styles[`& ${prefix}-enter-active, & ${prefix}-appear-active, & ${prefix}-leave-active`] = {
      transition: `all ${motionDuration}`,
    };
    styles[`& ${prefix}-enter, & ${prefix}-appear`] = {
      opacity: 0.7,
      transform: transformMap[dir as keyof typeof transformMap],
    };
    styles[`& ${prefix}-enter-active, & ${prefix}-appear-active`] = {
      opacity: 1,
      transform: 'none',
    };
    styles[`& ${prefix}-leave`] = {
      opacity: 1,
      transform: 'none',
    };
    styles[`& ${prefix}-leave-active`] = {
      opacity: 0.7,
      transform: transformMap[dir as keyof typeof transformMap],
    };
  });

  return styles;
};

const genMotionStyle = ({
  componentCls,
  motionDuration = '0.3s',
}: {
  componentCls: string;
  motionDuration?: string;
}) => ({
  ...genMaskMotionStyle({ componentCls, motionDuration }),
  ...genPanelMotionStyle({ componentCls, motionDuration }),
});

export default genMotionStyle;
