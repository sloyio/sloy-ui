import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

interface Props {
  children: ReactNode;
  rounded?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  width: fit-content;
  padding: 16px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  ${({ theme }) =>
    getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: 0.88,
      blur: 10,
    })};
`;

export function Menu({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export { MenuGroup } from './components/MenuGroup';
export { MenuItem } from './components/MenuItem';
