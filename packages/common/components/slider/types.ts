import type { ReactNode } from 'react';
import type { CollectionOptions } from '@zag-js/collection';

import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';
import { ValueChangeDetails } from '@ark-ui/react/dist/components/select/select';
import { SelectionDetails } from '@ark-ui/react/dist/components/menu/menu';
import { Slider, SliderRootProps } from '@ark-ui/react';
import { styles } from './styles';

export type { StylesProperties };
export type IProps<Styles> = React.RefAttributes<HTMLDivElement> &
  Omit<SliderRootProps, ''> &
  FCWithStylesProps<Styles> & {
    value?: number[];
    marks?: {
      items: {
        label?: string | ReactNode;
        value: number;
      }[];
      renderItem?: (item: { label: string | ReactNode; value: number }) => ReactNode;
    };
    label?: string;
    showValueText?: boolean;
    size?: 'small' | 'default' | 'large';
    onValueChange?: (value: Slider.ValueChangeDetails) => void;
  };
export type SliderTypes = ReturnType<typeof styles>;
export type SliderKeys = keyof SliderTypes;
export type SliderProps = IProps<SliderTypes>;
