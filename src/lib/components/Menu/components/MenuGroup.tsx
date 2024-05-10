import { ReactNode } from 'react';
import styled from 'styled-components';

const MenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuGroupLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  padding: 2px 16px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

export function MenuGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <MenuGroupWrapper>
      <MenuGroupLabel>{label}</MenuGroupLabel>
      {children}
    </MenuGroupWrapper>
  );
}
