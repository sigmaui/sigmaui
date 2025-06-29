import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const buttonPageStyles = stylex.create({
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
  demoButton: {
    margin: '0.5rem'
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

    ':hover': {
      backgroundColor: '#42b883',
      color: 'white'
    }
  }
});

export type ButtonPageTypes = typeof buttonPageStyles;
export type ButtonPageKeys = keyof ButtonPageTypes;

export default buttonPageStyles; 