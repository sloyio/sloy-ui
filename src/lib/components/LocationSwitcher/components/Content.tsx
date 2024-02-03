import styled, { css } from 'styled-components';
import { IDropdownItem } from '../../../types/IDropdownItem';

const Wrapper = styled.div`
  display: flex;
  padding: 12px 8px 8px 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  gap: 16px;
  min-width: 243px;
  transition: all 0.15s ease-out;
  border-radius: 16px;
  background: rgba(96, 131, 255, 0.2);
  /* Sloy Window */
  backdrop-filter: blur(25px);
`;

const ItemsGroup = styled.div`
  width: 100%;
`;

const Country = styled.span`
  font-size: 10px;
  color: #9baac3;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
`;

const Item = styled.button<{ $isActive: boolean }>`
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
  border-radius: 8px;
  ${({ $isActive }) =>
    $isActive
      ? css`
          background: rgba(96, 131, 255, 0.2);
          backdrop-filter: blur(25px);
        `
      : css`
          background: transparent;
        `};
  @media (hover) {
    &:hover {
      background-color: rgba(96, 131, 255, 0.1);
    }
  }
`;

interface Props {
  items: IDropdownItem[];
  activeLocation: string;
  setActiveLocation: (location: string) => void;
}

export default function Content({
  items,
  activeLocation,
  setActiveLocation,
}: Props) {
  return (
    <Wrapper>
      {items.map((elem) => (
        <ItemsGroup>
          <Country>{elem.country}</Country>
          {elem.cities.map((elem) => (
            <Item
              $isActive={elem.id === activeLocation}
              onClick={() => setActiveLocation(elem.id)}
            >
              {elem.name}
            </Item>
          ))}
        </ItemsGroup>
      ))}
    </Wrapper>
  );
}
