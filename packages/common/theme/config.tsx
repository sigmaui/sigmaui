import { type Theme } from '@microui-kit/theme';

import { modes } from './modes';
import { components } from './tokens/components';
import { colors } from './tokens/colors';

const theme: Theme = {
  base: {
    fontSize: 16
  },
  modes,
  components,
  colors
}

export default theme