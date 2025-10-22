import { TokensConfig } from '@sigma-ui-kit/theme';

const darkTokens: TokensConfig = {
  colors: {
    text: {
      strong: 'rgba(255, 255, 255, 1)',
      weak: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      brand: {
        primary: 'rgba(255, 178, 102, 1)',
        secondary: 'rgba(255, 255, 255, 1)',
      },
      error: 'rgba(255, 105, 97, 1)',
      warning: 'rgba(255, 179, 64, 1)',
      success: 'rgba(48, 219, 91, 1)',
      information: 'rgba(64, 156, 255, 1)',
      discovery: 'rgba(218, 143, 255, 1)',
      inverse: {
        strong: 'rgba(41, 43, 51, 0.95)',
        weak: 'rgba(41, 43, 51, 0.7)',
        disabled: 'rgba(41, 43, 51, 0.3)',
      },
      whiteFixed: 'rgba(255, 255, 255, 1)',
    },

    stroke: {
      strong: 'rgba(255, 255, 255, 0.5)',
      weak: 'rgba(255, 255, 255, 0.1)',
      darkest: 'rgba(255, 255, 255, 1)',
      selected: 'rgba(255, 178, 102, 1)',
      brand: {
        strong: 'rgba(255, 178, 102, 0.8)',
        weak: 'rgba(255, 178, 102, 0.2)',
      },
      inverse: {
        strong: 'rgba(41, 43, 51, 0.95)',
        weak: 'rgba(41, 43, 51, 0.2)',
      },
      error: {
        strong: 'rgba(255, 69, 58, 0.8)',
        weak: 'rgba(255, 69, 58, 0.2)',
      },
      warning: {
        strong: 'rgba(255, 159, 10, 0.8)',
        weak: 'rgba(255, 159, 10, 0.2)',
      },
      success: {
        strong: 'rgba(48, 209, 88, 0.8)',
        weak: 'rgba(48, 209, 88, 0.2)',
      },
      information: {
        strong: 'rgba(10, 132, 255, 0.8)',
        weak: 'rgba(10, 132, 255, 0.2)',
      },
      discovery: {
        strong: 'rgba(191, 90, 242, 0.8)',
        weak: 'rgba(191, 90, 242, 0.2)',
      },
    },
    fill: {
      strong: 'rgba(255, 255, 255, 1)',
      weak: 'rgba(255, 255, 255, 0.05)',
      weaker: 'rgba(255, 255, 255, 0.02)',
      hover: 'rgba(255, 255, 255, 0.1)',
      press: 'rgba(255, 255, 255, 0.2)',
      disabled: 'rgba(255, 255, 255, 0.1)',
      overlays: 'rgba(0, 0, 0, 0.6)',
      selected: {
        brand: {
          primary: 'rgba(247, 127, 0, 1)',
          secondary: 'rgba(255, 255, 255, 1)',
        },
        neutral: 'rgba(255, 255, 255, 1)',
      },
      inverse: {
        hover: 'rgba(41, 43, 51, 0.05)',
        press: 'rgba(41, 43, 51, 0.1)',
        selected: {
          solid: 'rgba(41, 43, 51, 1)',
          strong: 'rgba(41, 43, 51, 0.7)',
        },
      },
      brand: {
        strong: 'rgba(247, 127, 0, 1)',
        medium: 'rgba(255, 178, 102, 0.2)',
        weak: 'rgba(255, 178, 102, 0.1)',
      },
      error: {
        strong: 'rgba(255, 69, 58, 1)',
        medium: 'rgba(255, 69, 58, 0.2)',
        weak: 'rgba(255, 69, 58, 0.1)',
      },
      warning: {
        strong: 'rgba(255, 159, 10, 1)',
        medium: 'rgba(255, 159, 10, 0.2)',
        weak: 'rgba(255, 159, 10, 0.1)',
      },
      success: {
        strong: 'rgba(48, 209, 88, 1)',
        medium: 'rgba(48, 209, 88, 0.2)',
        weak: 'rgba(48, 209, 88, 0.1)',
      },
      information: {
        strong: 'rgba(10, 132, 255, 1)',
        medium: 'rgba(10, 132, 255, 0.2)',
        weak: 'rgba(10, 132, 255, 0.1)',
      },
      discovery: {
        strong: 'rgba(191, 90, 242, 1)',
        medium: 'rgba(191, 90, 242, 0.2)',
        weak: 'rgba(191, 90, 242, 0.1)',
      },
      blanked: 'rgba(0, 0, 0, 0.01)',
    },
    background: {
      base: 'rgba(29, 30, 38, 1)',
      raised: 'rgba(41, 43, 51, 1)',
      overlay: 'rgba(45, 49, 58, 1)',
      sunken: 'rgba(18, 19, 26, 1)',
      alternate: 'rgba(18, 19, 26, 1)',
      brand: 'rgba(247, 127, 0, 1)',
      inverse: 'rgba(255, 255, 255, 1)',
    },
  },

  boxShadows: {
    xs: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
    md: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
    lg: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
    xl: '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
    '2xl': '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',
  },
};

export default darkTokens;
