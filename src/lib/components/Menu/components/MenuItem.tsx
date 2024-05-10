import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../../utils/getBackgroundStyle';

//  const ComboboxItemButton = styled.button`
//    border: 2px solid #fff;
//    background: none;
//    border: none;
//    outline: none;
//  `;

//  const ComboboxItemText = styled.div`
//    color: #fff;
//    font-size: 16px;
//    padding: 6px 8px;
//    text-align: start;
//    border-radius: 8px;
//    display: flex;
//    align-items: center;
//    cursor: pointer;
//    &:hover {
//      ${({ theme }) =>
//        getBackgroundStyle({
//          color: theme.colors.background.secondary,
//          opacity: 0.2,
//        })}
//    }
//  `;

const MenuItemButton = styled.button<{ $isActive?: boolean }>`
  height: 26px;
  padding: 0 8px;
  color: #fff;
  background: none;
  border: none;
  outline: none;
`;

const MenuItemText = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 6px 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${({ theme }) =>
      getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: 0.2,
      })}
  }
`;

const MenuItemActiveMark = styled.div<{ $isActive?: boolean }>`
  position: relative;
  top: -30px;
  left: -8px;
  width: 2px;
  height: 28px;
  background-color: #fff;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export function MenuItem({
  children,
  onClick,
  isActive,
}: {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <>
      <MenuItemButton $isActive={isActive} onClick={onClick}>
        <MenuItemText>{children}</MenuItemText>
        {isActive && <MenuItemActiveMark />}
      </MenuItemButton>
    </>
  );
}
