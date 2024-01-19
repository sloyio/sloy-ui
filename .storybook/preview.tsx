import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme, sloyTheme } from '../src/lib/theme';
import { GlobalStyles } from '../src/lib/createGlobalStyles'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
      sloy: sloyTheme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

export const parameters = {
  decorators,
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'map',
        value: 'url(./desktop.jpg)',
      },
      {
        name: 'dark',
        value: '#141D34',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'grey',
        value: '#cdd5e7',
      },
    ],
  },
};
