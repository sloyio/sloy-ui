import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  padding: 2px 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export function MenuGroup({ label, children }: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
}
