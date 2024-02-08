import { FloatingFocusManager } from '@floating-ui/react';
import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  context: any; // TODO: change this type
  setFloating: () => any;
  floatingStyles: object;
  getFloatingProps: () => any;
  children: ReactNode;
}

export default function Menu({
  isOpen,
  context,
  floatingStyles,
  setFloating,
  getFloatingProps,
  children,
}: Props) {
  if (!isOpen) return;

  return (
    <FloatingFocusManager context={context} modal={false}>
      <div ref={setFloating} style={floatingStyles} {...getFloatingProps()}>
        {children}
      </div>
    </FloatingFocusManager>
  );
}
