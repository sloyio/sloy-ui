import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IDropdownItem } from '../../types/IDropdownItem';
import Earth from '../Icon/Earth';

const dropdownItems = [
  {
    country: 'Россия',
    cities: [
      {
        id: 'ekaterinburg',
        name: 'Екатеринбург',
      },
      {
        id: 'chelyabinsk',
        name: 'Челябинск',
      },
    ],
  },
  {
    country: 'Армения',
    cities: [
      {
        id: 'whole-country',
        name: 'Вся страна',
      },
      {
        id: 'erevan',
        name: 'Ереван',
      },
    ],
  },
  {
    country: 'Финляндия',
    cities: [
      {
        id: 'helsinki',
        name: 'Хельсинки',
      },
    ],
  },
] as IDropdownItem[];

interface Props {
  activeLocation: string;
  setActiveLocation: (location: string) => void;
}

const Wrapper = styled.div``;

const Button = styled.button<{ $isOpen: boolean }>`
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  display: flex;
  height: 40px;
  padding: 9px 12px 11px 8px;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  border-radius: 20px;
  background-color: ${({ $isOpen }) =>
    $isOpen ? 'rgba(96, 131, 255, 0.20);' : 'rgba(10, 13, 22, 0.1)'};
  backdrop-filter: blur(25px);

  @media (hover) {
    &:hover {
      background-color: rgba(96, 131, 255, 0.1);
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
  bottom: 8px;
  z-index: 2;
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

const DropdownItemsGroup = styled.div`
  width: 100%;
`;

const DropdownItem = styled.button<{ $isActive: boolean }>`
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

const Country = styled.div`
  font-size: 10px;
  color: #9baac3;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
`;

export default function LocationSwitcher({
  activeLocation,
  setActiveLocation,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const cities = dropdownItems.map((elem) => elem.cities).flat();
  const locationName = cities.find((elem) => elem.id === activeLocation)!.name;

  const closeDropdown = (): void => {
    setIsOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, closeDropdown);

  return (
    <Wrapper ref={ref}>
      {isOpen && (
        <Dropdown>
          {dropdownItems.map((elem) => (
            <DropdownItemsGroup>
              <Country>{elem.country}</Country>
              {elem.cities.map((elem) => (
                <DropdownItem
                  $isActive={elem.id === activeLocation}
                  onClick={() => setActiveLocation(elem.id)}
                >
                  {elem.name}
                </DropdownItem>
              ))}
            </DropdownItemsGroup>
          ))}
        </Dropdown>
      )}
      <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Earth />
        {locationName}
      </Button>
    </Wrapper>
  );
}

dropdownItems;
