import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Label = styled.span`
  font-size: 10px;
  color: #9baac3;
  display: flex;
  padding: 0 8px;
  gap: 10px;
`;

export default function MenuGroup({ label, children }: Props) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  );
}
