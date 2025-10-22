import React from 'react';
import { useTheme } from '@theme/ThemeProvider';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) {
  const { theme } = useTheme();

  const getVariantStyles = () => {
    const baseStyles = {
      border: 'none',
      borderRadius: theme.tokens.borderRadius.md,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: theme.tokens.typography.fontFamily.primary,
      fontWeight: theme.tokens.typography.fontWeight.medium,
      transition: 'all 0.2s ease-in-out',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
    };

    const sizeStyles = {
      sm: {
        padding: `${theme.tokens.spacing.sm} ${theme.tokens.spacing.md}`,
        fontSize: theme.tokens.typography.fontSize.sm,
      },
      md: {
        padding: `${theme.tokens.spacing.md} ${theme.tokens.spacing.lg}`,
        fontSize: theme.tokens.typography.fontSize.md,
      },
      lg: {
        padding: `${theme.tokens.spacing.lg} ${theme.tokens.spacing.xl}`,
        fontSize: theme.tokens.typography.fontSize.lg,
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: disabled
          ? theme.tokens.colors.text.disabled
          : theme.tokens.colors.brand.primary,
        color: theme.tokens.colors.text.inverse,
        boxShadow: disabled ? 'none' : theme.tokens.shadows.sm,
      },
      secondary: {
        backgroundColor: disabled
          ? theme.tokens.colors.background.tertiary
          : theme.tokens.colors.background.secondary,
        color: disabled ? theme.tokens.colors.text.disabled : theme.tokens.colors.text.primary,
        border: `1px solid ${theme.tokens.colors.border.primary}`,
      },
      outline: {
        backgroundColor: 'transparent',
        color: disabled ? theme.tokens.colors.text.disabled : theme.tokens.colors.brand.primary,
        border: `1px solid ${disabled ? theme.tokens.colors.text.disabled : theme.tokens.colors.brand.primary}`,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: disabled ? theme.tokens.colors.text.disabled : theme.tokens.colors.text.primary,
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const styles = getVariantStyles();

  return (
    <button
      style={styles}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={e => {
        if (!disabled && variant === 'primary') {
          e.currentTarget.style.backgroundColor = theme.tokens.colors.brand.secondary;
          e.currentTarget.style.boxShadow = theme.tokens.shadows.md;
        } else if (!disabled && variant === 'secondary') {
          e.currentTarget.style.backgroundColor = theme.tokens.colors.background.tertiary;
          e.currentTarget.style.borderColor = theme.tokens.colors.border.secondary;
        } else if (!disabled && variant === 'outline') {
          e.currentTarget.style.backgroundColor = theme.tokens.colors.brand.primary;
          e.currentTarget.style.color = theme.tokens.colors.text.inverse;
        } else if (!disabled && variant === 'ghost') {
          e.currentTarget.style.backgroundColor = theme.tokens.colors.background.secondary;
        }
      }}
      onMouseLeave={e => {
        if (!disabled) {
          const originalStyles = getVariantStyles();
          Object.assign(e.currentTarget.style, originalStyles);
        }
      }}
    >
      {children}
    </button>
  );
}
