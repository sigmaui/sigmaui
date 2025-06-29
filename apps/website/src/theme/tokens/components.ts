import * as stylex from '@stylexjs/stylex';
import type { StylesDefinitions } from '@packages/common/theme/types';
import type { ButtonKeys } from '@packages/react/components/button';
import type { SelectKeys } from '@packages/react/components/select';
import { FCProps } from '@packages/react/types';

type ComponentTokens = {
  [key: string]: {
    defaultProps?: FCProps<any>
  };
};

const buttonStyles = stylex.create({
  root: {
    // position: 'fixed',
    backgroundColor: 'black'
  },
  icon: {
    position: 'relative',
  }
} as Partial<Pick<StylesDefinitions, ButtonKeys>>);

const selectStyles = stylex.create({
  root: {},
  label: {
    color: 'pink'
  }
} as Partial<Pick<StylesDefinitions, SelectKeys>>);

const componentTokens: ComponentTokens = {
  Button: {
    defaultProps: {
      // size: 'sm',
      xClass: ['relative', 'block'],
      // styles: buttonStyles
    }
  },
  Select: {
    defaultProps: {
      styles: selectStyles
    }
  }
};

export default componentTokens;