import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

const MenuWrapper = styled.div`
  padding: 16px 0;
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

export function Menu({ children }: { children: ReactNode }) {
  return <MenuWrapper>{children}</MenuWrapper>;
}

export { MenuGroup } from './components/MenuGroup';
export { MenuItem } from './components/MenuItem';
