import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export const DropdownContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export function DropdownProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  return useContext(DropdownContext);
}
