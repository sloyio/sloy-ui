import { useState } from 'react';
import styled from 'styled-components';
import { IDropdownItem } from '../../types/IDropdownItem';
import Earth from '../Icon/Earth';
import Popover from '../Popover';
import Content from './components/Content';

const dropdownItems: IDropdownItem[] = [
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
] as const;

interface Props {
  activeLocation: string;
  setActiveLocation: (location: string) => void;
}

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

export default function LocationSwitcher({
  activeLocation,
  setActiveLocation,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cities = dropdownItems.map((elem) => elem.cities).flat();
  const locationName = cities.find((elem) => elem.id === activeLocation)!.name;

  return (
    <Popover placement="top-start">
      <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Earth />
        {locationName}
      </Button>
      <Content
        items={dropdownItems}
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
      />
    </Popover>
  );
}
