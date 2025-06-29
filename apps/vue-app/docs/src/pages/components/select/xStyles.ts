import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const selectPageStyles = stylex.create({
  root: {
    padding: '2rem'
  },
  demoSection: {
    margin: '2rem 0',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  demoTitle: {
    marginBottom: '1rem'
  },
  nav: {
    marginTop: '2rem'
  },
  navLink: {
    color: '#42b883',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    border: '1px solid #42b883',
    borderRadius: '4px',
    marginRight: '0.5rem',

    ':hover': {
      backgroundColor: '#42b883',
      color: 'white'
    }
  }
});

export type SelectPageTypes = typeof selectPageStyles;
export type SelectPageKeys = keyof SelectPageTypes;

export default selectPageStyles; 