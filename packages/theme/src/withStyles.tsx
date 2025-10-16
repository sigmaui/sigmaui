import React from 'react';
import { useTheme, Theme } from './themeContext';

type Styles<T> = (theme: Theme, props: T) => React.CSSProperties;

export function withStyles<T extends object>(styles: Styles<T>) {
  return (Component: React.ComponentType<T & { style?: React.CSSProperties }>) => {
    const Wrapped: React.FC<T> = props => {
      const { theme } = useTheme();
      const style = styles(theme, props);

      return <Component {...props} style={style} />;
    };

    // Giữ displayName để dễ debug
    Wrapped.displayName = `withStyles(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
  };
}
