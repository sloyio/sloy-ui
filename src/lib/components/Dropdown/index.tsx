import {
  FloatingFocusManager,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Menu, MenuGroup, MenuItem } from '..';
import { DropdownProvider, useDropdown } from './Context';

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

interface Props {
  placement?: Placement;
  children: React.ReactNode;
}

function DropdownTemplate({ placement = 'top', children }: Props) {
  const { isOpen, setIsOpen } = useDropdown();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: placement,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const [referenceContent, popoverContent] = React.Children.toArray(children);

  if (!referenceContent || !popoverContent) return null;

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {referenceContent}
      </div>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {popoverContent}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export function Dropdown({ placement, children }: Props) {
  return (
    <DropdownProvider>
      <DropdownTemplate placement={placement}>{children}</DropdownTemplate>
    </DropdownProvider>
  );
}

const Wrapper = styled.div`
  & > * {
    user-select: none;
  }
`;

Dropdown.Trigger = function ({ children }: { children: ReactNode }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setIsOpen } = useDropdown();

  if (!children) return null;

  const dropdownTrigger = React.cloneElement(<>{children}</>, {
    onclick: () => setIsOpen((s) => !s),
  });

  return <Wrapper>{dropdownTrigger}</Wrapper>;
};

Dropdown.Menu = Menu;
Dropdown.MenuGroup = MenuGroup;
Dropdown.MenuItem = MenuItem;
