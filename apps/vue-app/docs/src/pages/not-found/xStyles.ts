import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const notFoundStyles = stylex.create({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: colors.background
  },
  container: {
    textAlign: 'center',
    maxWidth: '600px'
  },
  errorCode: {
    fontSize: '8rem',
    fontWeight: 900,
    color: '#42b883',
    margin: '0',
    lineHeight: 1,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: colors.text,
    margin: '1rem 0',
    lineHeight: 1.2
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '1rem 0 3rem 0',
    lineHeight: 1.5
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  homeLink: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#42b883',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    transition: 'all 0.2s ease',

    ':hover': {
      backgroundColor: '#369870',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(66, 184, 131, 0.3)'
    }
  },
  componentsLink: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#42b883',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    border: '2px solid #42b883',
    transition: 'all 0.2s ease',

    ':hover': {
      backgroundColor: '#42b883',
      color: 'white',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(66, 184, 131, 0.3)'
    }
  }
});

export type NotFoundTypes = typeof notFoundStyles;
export type NotFoundKeys = keyof NotFoundTypes;

export default notFoundStyles; 