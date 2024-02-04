import styled, { css } from 'styled-components';

export interface DividerProps {
  verticalGap?: 0 | 4 | 8 | 16;
}

const StyledDivider = styled.div<{
  $verticalGap?: DividerProps['verticalGap'];
}>`
  margin: ${({ $verticalGap = 16 }) => css`
    ${$verticalGap}px 0
  `};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.colors.elements.tertiary};
`;

export function Divider({ verticalGap }: DividerProps) {
  return <StyledDivider $verticalGap={verticalGap} />;
}
