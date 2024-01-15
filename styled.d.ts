import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    global: {
      fontFamily: string;
    };
    colors: {
      text: {
        primary: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      elements: {
        primary: string;
        tertiary: string;
      };
    };
    accordion: {
      blur: number;
      opacity: {
        default: number;
        hover: number;
        active: number;
      };
    };
    listGrid: {
      blur: number;
      opacity: {
        hover: number;
        active: number;
      };
    };
    size: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
