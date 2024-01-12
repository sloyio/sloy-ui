import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme, sloyTheme } from '../src/lib/theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.global.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

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
        name: 'dark',
        value: '#141D34',
      },
    ],
  },
};
