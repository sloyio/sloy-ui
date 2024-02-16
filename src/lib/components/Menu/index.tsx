import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

interface Props {
  children: ReactNode;
  rounded?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  padding: 12px 8px 8px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  width: fit-content;
  transition: all 0.15s ease-out;
  border-radius: 16px;
  ${({ theme }) =>
    getBackgroundStyle({
      color: theme.colors.background.tertiary,
      opacity: 0.2,
      blur: 50,
    })};
`;

export function Menu({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export { MenuGroup } from './components/MenuGroup';
export { MenuItem } from './components/MenuItem';
