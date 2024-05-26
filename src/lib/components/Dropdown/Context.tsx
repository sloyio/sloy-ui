import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export function useDropdown() {
  return useContext(DropdownContext);
}
