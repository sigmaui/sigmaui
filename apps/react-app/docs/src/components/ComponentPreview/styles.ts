import { CSSProperties } from 'react';
type ClassKeys = 'wrapper' | 'preview';
type Styles = Record<ClassKeys, CSSProperties>;
export const styles: (props: any) => Styles = ({ theme }) => {
  return {
    wrapper: {
      border: '1px solid',
      padding: 8,
      borderColor: '#ddd',
      borderRadius: theme?.base?.borderRadius,
      overflow: 'hidden',
    },
    preview: {
      padding: 8,
    },
  };
};
