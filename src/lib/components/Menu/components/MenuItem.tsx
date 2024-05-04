import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../../utils/getBackgroundStyle';

export const MenuItem = styled.button`
  font-size: 16px;
  line-height: 20px;
  padding: 5px 8px;
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
        color: theme.colors.background.secondary,
        opacity: 0.08,
      })}
    }
  `}
`;
