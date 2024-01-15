import { rgba } from 'polished';
import { css } from 'styled-components';

export const getBackgroundStyle = ({
  color,
  opacity = 1,
  blur = 0,
}: {
  color: string;
  opacity?: number;
  blur?: number;
}) => {
  if (blur > 0) {
    return css`
      background-color: ${rgba(color, opacity)};
      backdrop-filter: blur(${blur}px);
    `;
  } else if (opacity < 1) {
    return css`
      background-color: ${rgba(color, opacity)};
    `;
  }

  return css`
    background-color: ${color};
  `;
};
