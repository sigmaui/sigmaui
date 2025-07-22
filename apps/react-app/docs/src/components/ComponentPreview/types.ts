import type { FCWithStylesProps } from 'packages/common/types';

interface IData {
  code: {
    react: string;
    vue: string;
  }
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  data: IData
}