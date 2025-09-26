import type { FCWithStylesProps } from 'packages/common/types';
import { PrismLanguage } from '@docs/utils/prism.constant';
import { styles } from './styles';
export type CodeEditorTypes = ReturnType<typeof styles>;
export type CodeEditorKeys = keyof CodeEditorTypes;

export type CodeEditorProps = IProps<CodeEditorTypes>;

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  content: string;
  language?: PrismLanguage;
  lineNumbers?: boolean;
  displayLang: string;
}
