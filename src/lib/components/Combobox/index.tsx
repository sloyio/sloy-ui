import { ReactNode } from 'react';
import styled from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

const ComboboxWrapper = styled.div`
  padding: 16px 8px;
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

export function Combobox({ children }: { children: ReactNode }) {
  return <ComboboxWrapper>{children}</ComboboxWrapper>;
}

export { ComboboxGroup } from './components/ComboboxGroup';
export { ComboboxItem } from './components/ComboboxItem';
