import { Fragment, useState } from 'react';
import Select from '@sigmaui-kit/select';
import { SliderProps } from '@packages/common/components/slider/types';
import { ReturnTypeUseControl } from '../..';
export type ControlType = 'select' | 'slider' | 'switch' | 'demo';

export type ControlCommonType<T> = {
  label: string;
  prop: keyof T;
  initialValue: any;
};
export type SelectControlType = {
  type: 'select';
  options: {
    label: string;
    value: string;
  }[];
};
export type SliderControlType = SliderProps & {
  defaultValue: number[];
  mappingData: {
    [key in number]: string;
  };
  type: 'slider';
};
export type SwitchControlType = {
  type: 'switch';
};

export type ControlComponentType<T> = (SelectControlType | SliderControlType | SwitchControlType) &
  ControlCommonType<T>;

export const useControl = <T,>(items: ControlComponentType<T>[]) => {
  const [state, setState] = useState<T>(
    items.reduce((acc, item) => {
      acc[item.prop] = item.initialValue;
      return acc;
    }, {} as any),
  );
  return {
    state,
    setState,
  };
};
