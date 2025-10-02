import { type SVGProps, useEffect, useMemo } from 'react';
import { interpolate } from 'flubber';
import { animate, motion, MotionValue, useMotionValue, useTransform, Transition } from 'motion/react';

function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

const getIndex = (_: string, index: number) => index;
const getColors = ({ colors, length }) => {
  if (colors) {
    return colors;
  }

  return Array(length).fill('');
};

export interface PathLengthProps extends SVGProps<SVGSVGElement> {
  path: string;
  paths: string[];
  transition?: Transition;
}

const PathMorphing = ({ path, paths = [], transition, ...restProps }: PathLengthProps) => {
  const colors = useMemo(() => {
    return getColors({
      colors: colorsCustom,
      length: paths.length,
    });
  }, []);

  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.3,
      ease: 'easeInOut',
      ...transition,
    });

    return () => {
      animation.stop();
    };
  }, [pathIndex, progress]);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <motion.path
        fill={fill}
        d={path}
      />
    </svg>
  );
};

export default PathMorphing;
