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
      primary: '#1e2841',
      secondary: '#040d24',
      tertiary: '#141d34',
    },
  },
};
