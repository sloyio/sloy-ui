import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

interface Props {
  items: string[];
  activeItemIndex: number;
  onChange: (index: number) => void;
}

const Wrapper = styled.div`
  height: 40px;
  width: fit-content;
  padding: 0 8px;
  display: flex;
  align-items: center;
  border-radius: 42px;
  gap: 8px;
  transition: all 0.15s ease-out;
  ${({ theme }) => css`
    color: ${theme.text.color.secondary};
    ${getBackgroundStyle({
      color: theme.buttons.color.default,
      opacity: theme.buttons.opacity.default,
      blur: theme.buttons.blur,
    })};
  `}
`;

const Element = styled.button<{ $isActive: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  transition: all 0.15s ease-out;

  ${({ theme, $isActive }) => css`
    color: ${$isActive ? theme.text.color.primary : theme.text.color.tertiary};
    @media (hover) {
      &:hover {
        color: ${!$isActive && theme.text.color.secondary};
      }
    }
  `}
`;

export function SegmentedControl({ items, activeItemIndex, onChange }: Props) {
  return (
    <Wrapper>
      {items.map((elem, index) => (
        <Element
          key={elem}
          $isActive={index === activeItemIndex}
          onClick={() => onChange(index)}
        >
          {elem}
        </Element>
      ))}
    </Wrapper>
  );
}
