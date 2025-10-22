const globalStyles = ({ theme }: any) => {
  const platform = theme?.platform;

  return {
    '*, :after, :before': {
      '-webkitBoxSizing': 'border-box',
      boxSizing: 'border-box',
    },
    html: {
      'text-size-adjust': 'none',
    },
    body: {
      fontFamily:
        '"SigmaUI-Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      // lineHeight: '1rem',
      '-webkit-tap-highlight-color': 'transparent',
      overflowX: 'auto',
    },
    'html:fullscreen': {
      overflow: 'hidden',
    },
    'html:fullscreen body': {
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      right: platform?.isDesktop ? 'calc((var(--app-scrollbar-width, 0px) + 1px) * -1)' : undefined,
      overflowX: 'auto',
    },
    'body[data-overflow="hidden"]': {
      width: 'calc(100% - var(--app-scrollbar-width, 0px))',
    },
    'h1, h2, h3, h4, h5, h6, p, ol, ul, li': {
      margin: 0,
      padding: 0,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    'a:hover': {
      color: theme.colors.base,
    },
    'input, textarea, button': {
      fontFamily: 'inherit',
    },
    button: {
      color: 'inherit',
    },
    '::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 6,
      height: 6,
      borderRadius: 6,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(50 50 50 / 45%)',
      borderRadius: 6,
    },
    '::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
    '[data-placeholder-shown] [data-part="value-text"]': {
      color: '#999',
    },
  };
};

export default globalStyles;
