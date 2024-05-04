import { ReactNode } from 'react';
import styled from 'styled-components';

const ComboboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComboboxGroupLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  padding: 2px 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export function ComboboxGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <ComboboxGroupWrapper>
      <ComboboxGroupLabel>{label}</ComboboxGroupLabel>
      {children}
    </ComboboxGroupWrapper>
  );
}
