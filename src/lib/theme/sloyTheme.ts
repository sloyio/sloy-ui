import { DefaultTheme } from 'styled-components';
import deepmerge from 'deepmerge';
import { defaultTheme } from '.';

const sloyColorsTokens = {
  text: {
    primary: '#fff',
    secondary: '#9baac3',
    tertiary: '#6e7c94',
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
  text: {
    color: sloyColorsTokens.text,
  },
  buttons: {
    blur: 20,
    textColor: sloyColorsTokens.text.primary,
    color: {
      default: '#0A0D16',
      hover: '#6083FF',
      active: '#6083FF',
    },
    opacity: {
      default: 0.7,
      hover: 0.1,
      active: 0.2,
    },
  },
});
