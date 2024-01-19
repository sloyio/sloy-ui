import { DefaultTheme } from 'styled-components';

const size = {
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '12px',
  xl: '16px',
  xxl: '20px',
};

const ekbColorsTokens = {
  text: {
    primary: '#FFF',
  },
  background: {
    primary: '#1e2841',
    secondary: '#040d24',
    tertiary: '#141d34',
  },
  elements: {
    primary: '#1e2841',
    secondary: '#040d24',
    tertiary: '#3c4669',
  },
};

export const defaultTheme: DefaultTheme = {
  global: {
    fontFamily: `'Iset Sans', sans-serif`,
  },
  colors: ekbColorsTokens,
  background: {
    blur: 0,
    opacity: {
      default: 1,
      hover: 1,
      active: 1,
    },
  },
  text: {
    color: {
      primary: '#fff',
      secondary: '#9baac3',
    },
  },
  buttons: {
    color: {
      default: '#2f395b',
      hover: '#3c4669',
      active: '#495478',
    },
    opacity: {
      default: 1,
      hover: 1,
      active: 1,
    },
  },
  size,
};
