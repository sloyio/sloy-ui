import styled, { css } from 'styled-components';

export interface DividerProps {
  verticalGap?: 0 | 8 | 16;
}

const StyledDivider = styled.div<{
  $verticalGap?: DividerProps['verticalGap'];
}>`
  margin: ${({ $verticalGap = 16 }) => css`
    ${$verticalGap}px 0
  `};
  border: 1px solid #3c4669;
`;

export function Divider({ verticalGap }: DividerProps) {
  return <StyledDivider $verticalGap={verticalGap} />;
}
