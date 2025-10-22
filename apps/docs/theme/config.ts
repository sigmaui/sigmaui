
import lightTokens from './tokens/lightToken';
import darkTokens from './tokens/darkTokens';
import tabletTokens from './tokens/tabletTokens';
import mobileTokens from './tokens/mobileToken';
import desktopTokens from './tokens/desktopTokes';


export const themeConfig = {
  modeConfig: [
    {
      mode: 'light',
      tokens: lightTokens,
    },
    {
      mode: 'dark',
      tokens: darkTokens,
    },
  ],

  deviceConfig: [
    {
      device: 'desktop',
      tokens: desktopTokens,
    },
    {
      device: 'mobile',
      tokens: mobileTokens,
    },
    {
      device: 'tablet',
      tokens: tabletTokens,
    },
  ],
};

export default themeConfig;
