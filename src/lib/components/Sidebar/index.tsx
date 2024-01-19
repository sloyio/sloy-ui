import { ReactNode } from 'react';
import styled from 'styled-components';
import { Icon, IconType } from '../Icon';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

export interface SidebarProps {
  children: ReactNode;
  onClose: VoidFunction;
}

export const LeftSidebar = styled.div`
  width: 29%;
  min-width: 340px;
  max-width: 435px;
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 401;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100vh - 120px);
`;

export const RightSidebar = styled.div`
  width: 50%;
  max-width: 400px;
  position: fixed;
  top: 8px;
  right: 8px;
  z-index: 401;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100vh - 120px);
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 10px;
  max-height: calc(90vh - 2vw);
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 200px;
  ${({ theme }) =>
    getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: theme.background.opacity.default,
      blur: theme.background.blur,
    })};
`;

const WrapperHeader = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
  z-index: 1;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  color: #fff;
  line-height: 1;
  cursor: pointer;
  transition: 0.15s ease;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover) {
    &:hover {
      background-color: #111725;
    }
  }

  &:active {
    background-color: #06080d;
  }

  @media screen and (width >= 1200px) {
    & {
      top: 2px;
      width: 48px;
      height: 48px;
    }
  }
`;

export function SidebarContent({ children, onClose }: SidebarProps) {
  return (
    <Wrapper>
      <WrapperHeader>
        <Close onClick={onClose}>
          <Icon type={IconType.Close} />
        </Close>
      </WrapperHeader>
      {children}
    </Wrapper>
  );
}
