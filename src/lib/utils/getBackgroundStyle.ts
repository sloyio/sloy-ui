import { rgba } from 'polished';
import { css } from 'styled-components';

export const getBackgroundStyle = ({
  color,
  opacity = 1,
  blur = 0,
  imporant = false,
}: {
  color: string;
  opacity?: number;
  blur?: number;
  imporant?: boolean;
}) => {
  if (blur > 0) {
    return css`
      background-color: ${rgba(color, opacity)} ${imporant ? '!important' : ''};
      backdrop-filter: blur(${blur}px);
      -webkit-backdrop-filter: blur(${blur}px);
    `;
  } else if (opacity < 1) {
    return css`
      background-color: ${rgba(color, opacity)} ${imporant ? '!important' : ''};
    `;
  }

  return css`
    background-color: ${color} ${imporant ? '!important' : ''};
  `;
};
