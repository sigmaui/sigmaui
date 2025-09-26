import type { FCWithStylesProps } from 'packages/common/types';
import { styles } from './styles';

export enum CodeEnum {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  REACT = 'react',
  VUE = 'vue',
}

export interface IData {
  code: {
    [CodeEnum.TYPESCRIPT]: string;
    [CodeEnum.JAVASCRIPT]?: string;
    // [CodeEnum.REACT]: string
    // [CodeEnum.VUE]: string
  };
}

export type ComponentPreviewTypes = ReturnType<typeof styles>;
export type ComponentPreviewKeys = keyof ComponentPreviewTypes;

export type ComponentPreviewProps = IProps<ComponentPreviewTypes>;

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  data: IData;
}
