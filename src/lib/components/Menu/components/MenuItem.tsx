import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../../utils/getBackgroundStyle';

export const MenuItem = styled.button`
  padding: 8px;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: start;
  ${({ theme }) => css`
    &:hover {
      ${getBackgroundStyle({
        color: theme.colors.background.tertiary,
        opacity: 0.2,
      })}
    }
  `}
`;
