import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../../utils/getBackgroundStyle';

const ComboboxTriggerButton = styled.button`
  color: #fff;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 160px;
  padding: 8px;
  gap: 4px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: all 0.15s ease;
  ${({ theme }) => css`
    ${getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: 0.88,
      blur: 10,
    })}
    &:hover {
      ${getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: 0.04,
        blur: 10,
      })}
    }
  `}
`;

export function ComboboxTrigger({
  children,
  onClick,
  prefix,
}: {
  children: ReactNode;
  onClick?: () => void;
  prefix?: ReactNode;
}) {
  return (
    <ComboboxTriggerButton onClick={onClick}>
      {prefix}
      {children}
    </ComboboxTriggerButton>
  );
}
