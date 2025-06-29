import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const segmentGroupPageStyles = stylex.create({
  root: {
    padding: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: colors.text,
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '3rem'
  },
  demoSection: {
    margin: '2rem 0',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  demoTitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: colors.text
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

export type SegmentGroupPageTypes = typeof segmentGroupPageStyles; 