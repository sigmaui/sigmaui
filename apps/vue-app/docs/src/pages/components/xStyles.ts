import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const componentsStyles = stylex.create({
  root: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
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
  segmentGroupSection: {
    marginBottom: '3rem',
    borderRadius: '8px',
    backgroundColor: colors.background
  },
  componentsSection: {
    marginTop: '3rem'
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    color: '#2c3e50',
    fontSize: '1.8rem',
    fontWeight: 600
  },
  componentsNav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem'
  },
  componentCard: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    backgroundColor: colors.background,

    ':hover': {
      borderColor: '#42b883',
      boxShadow: '0 4px 12px rgba(66, 184, 131, 0.15)',
      transform: 'translateY(-2px)'
    }
  },
  componentHeader: {
    marginBottom: '1rem'
  },
  componentTitle: {
    margin: '0 0 0.5rem 0',
    color: '#42b883',
    fontSize: '1.3rem',
    fontWeight: 600
  },
  componentDescription: {
    margin: '0 0 1.5rem 0',
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: 1.4
  },
  viewDocsLink: {
    display: 'inline-block',
    color: '#42b883',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.9rem',
    padding: '0.5rem 0',
    transition: 'color 0.2s ease',

    ':hover': {
      color: '#369870',
      textDecoration: 'underline'
    }
  }
});

export type ComponentsTypes = typeof componentsStyles;
export type ComponentsKeys = keyof ComponentsTypes;

export default componentsStyles; 