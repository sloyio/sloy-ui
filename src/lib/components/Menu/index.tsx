import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

export const Menu = styled.div`
  padding: 8px 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) =>
    getBackgroundStyle({
      color: theme.colors.background.primary,
      blur: theme.background.blur,
      opacity: 0.88,
    })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  padding: 2px 16px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

export const MenuGroup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

const Button = styled.button<{ $isActive?: boolean }>`
  color: #fff;
  background: none;
  border: none;
  outline: none;
  display: flex;
  ${({ $isActive }) =>
    $isActive ? 'padding: 0 8px 0 6px;' : 'padding: 0 8px;'}
`;

const Text = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 4px 8px;
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

const ActiveMark = styled.div<{ $isActive?: boolean }>`
  position: relative;
  top: 8px;
  left: -6px;
  width: 2px;
  height: 12px;
  background-color: #fff;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const MenuItem = ({
  children,
  onClick,
  isActive,
}: {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  return (
    <Button $isActive={isActive} onClick={onClick}>
      {isActive && <ActiveMark />}
      <Text>{children}</Text>
    </Button>
  );
};
