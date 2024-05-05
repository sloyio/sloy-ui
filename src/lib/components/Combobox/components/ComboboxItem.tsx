import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../../utils/getBackgroundStyle';

const ComboboxItemButton = styled.button`
  color: #fff;
  font-size: 16px;
  padding: 6px 8px;
  text-align: start;
  border-radius: 8px;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${({ theme }) =>
      getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: 0.08,
      })}
  }
`;

export function ComboboxItem({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return <ComboboxItemButton onClick={onClick}>{children}</ComboboxItemButton>;
}
