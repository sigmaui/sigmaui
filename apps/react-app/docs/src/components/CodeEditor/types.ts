import type { FCWithStylesProps } from '@packages/react/types';

interface IData {
  code: {
    react: string;
    vue: string;
  }
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  data: IData
}