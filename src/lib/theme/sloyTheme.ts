import { DefaultTheme } from 'styled-components';
import deepmerge from 'deepmerge';
import { defaultTheme } from '.';

const sloyColorsTokens = {
  text: {
    primary: '#FFF',
  },
  background: {
    primary: '#0a0d16',
    secondary: '#6083ff',
    tertiary: '#6083ff',
  },
  elements: {
    primary: '#1e2841',
    secondary: '#040d24',
    tertiary: '#3c4669',
  },
};

export const sloyTheme: DefaultTheme = deepmerge<DefaultTheme>(defaultTheme, {
  global: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
  },
  colors: sloyColorsTokens,
  background: {
    blur: 20,
    opacity: {
      default: 0.7,
      hover: 0.2,
      active: 0.1,
    },
  },
});
