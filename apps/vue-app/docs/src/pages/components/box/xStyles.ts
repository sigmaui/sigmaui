import * as stylex from '@stylexjs/stylex';

export const boxPageStyles = stylex.create({
  root: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  nav: {
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid #e5e7eb'
  },
  navLink: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});

export type BoxPageTypes = typeof boxPageStyles;
export type BoxPageKeys = keyof BoxPageTypes;

export default boxPageStyles; 