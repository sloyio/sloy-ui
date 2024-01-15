import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  global: {
    fontFamily: `'Iset Sans', sans-serif`,
  },
  colors: {
    // plese be sure that you have abstract title of the theme key
    // NOT: color-red, color-sloy, green-button-color
    // YES: primary-color, secondary-color, tertiary-color
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
  },
  opacity: {
    primary: 1,
    secondary: 1,
    hover: 1,
  },
  size: {
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '20px',
  },
};

export const sloyTheme: DefaultTheme = {
  global: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
  },
  colors: {
    // plese be sure that you have abstract title of the theme key
    // NOT: color-red, color-sloy, green-button-color
    // YES: primary-color, secondary-color, tertiary-color
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
  },
  opacity: {
    primary: 0.7,
    secondary: 0.1,
    hover: 0.2,
  },
  size: {
    xs: '2px',
    s: '4px',
    m: '8px',
    l: '12px',
    xl: '16px',
    xxl: '20px',
  },
};
