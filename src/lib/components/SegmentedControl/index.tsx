import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

interface Props {
  items: string[];
  activeItemIndex: number;
  onChange: (index: number) => void;
}

const Wrapper = styled.div`
  height: 40px;
  width: 112px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  border-radius: 42px;
  gap: 8px;
  transition: all 0.15s ease-out;

  ${({ theme }) => css`
    ${getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: 0.1,
    })};
    @media (hover) {
      &:hover {
        ${getBackgroundStyle({
          color: theme.colors.background.secondary,
          opacity: 0.2,
        })};
      }
    }
  `};
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

export default function SegmentedControl({
  items,
  activeItemIndex,
  onChange,
}: Props) {
  return (
    <Wrapper>
      {items.map((elem, index) => (
        <Element
          $isActive={index === activeItemIndex}
          onClick={() => onChange(index)}
        >
          {elem}
        </Element>
      ))}
    </Wrapper>
  );
}
