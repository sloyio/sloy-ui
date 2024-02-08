import { useState } from 'react';
import styled, { css } from 'styled-components';
import useMenu from '../../hooks/useMenu';
import { IDropdownItem } from '../../types/IDropdownItem';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';
import { Button } from '../Button';
import { Icon, IconType } from '../Icon';
import Menu from '../Menu';
import Content from './components/Content';

interface Props {
  items: IDropdownItem[];
  activeLocation: string;
  setActiveLocation: (location: string) => void;
}

const StyledButton = styled(Button)<{ $isOpen: boolean }>`
  gap: 4px;
  ${({ theme, $isOpen }) => css`
    background-color: ${$isOpen
      ? getBackgroundStyle({
          color: theme.buttons.color.active,
          opacity: theme.buttons.opacity.active,
        })
      : getBackgroundStyle({
          color: theme.buttons.color.default,
          opacity: theme.buttons.opacity.default,
        })};

    @media (hover) {
      &:hover {
        background-color: ${getBackgroundStyle({
          color: theme.buttons.color.hover,
          opacity: theme.buttons.opacity.hover,
        })};
      }
    }
  `}
`;

export default function LocationSwitcher({
  items,
  activeLocation,
  setActiveLocation,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cities = items.map((elem) => elem.cities).flat();
  const locationName = cities.find((elem) => elem.id === activeLocation)!.name;

  const { setReference, getReferenceProps, ...props } = useMenu('top-start');

  return (
    <div>
      <StyledButton
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        ref={setReference}
        rounded
        {...getReferenceProps()}
      >
        <Icon type={IconType.Earth} />
        {locationName}
      </StyledButton>
      <Menu {...props}>
        <Content
          items={items}
          activeLocation={activeLocation}
          setActiveLocation={setActiveLocation}
        />
      </Menu>
    </div>
  );
}

// TODO:
// Add popover.stories.tsx

// styled-components has great theme provider that helps to get theme values from config.

// ${({ theme }) => theme.text.color.secondary};
// Please check AccordionItem component and theme/ folder

// we can get values from theme like
