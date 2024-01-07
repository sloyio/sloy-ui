import { css } from 'styled-components';

export function getScrollStyles() {
  //   const background = '#1e2841';
  const color = '#455068';
  const colorActive = '#5b677d';

  return css`
    & {
      overflow-y: auto;
    }

    /* FF */
    @supports (scrollbar-width: thin) {
      & {
        scrollbar-color: ${color} transparent;
        scrollbar-width: thin;
        overflow-y: auto;
        padding-right: 8px;
      }
    }

    /* Safari, Chrome */
    @supports not (scrollbar-width: thin) {
      & {
        overflow-y: scroll;
        padding-right: 0;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 16px;
      }

      &:hover::-webkit-scrollbar-thumb {
        background: ${color};
      }

      &::-webkit-scrollbar-thumb:active {
        background: ${colorActive};
      }
    }
  `;
}
