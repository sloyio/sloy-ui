import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.global.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-font-feature-settings: 'kern' 1;
    font-feature-settings: 'kern';
  }

  * {
    box-sizing: border-box;
  }

  button,
  input {
    font-family: inherit;
  }
`;
