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
import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

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
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function Dropdown({
  placement = 'top',
  children,
  isOpen,
  setIsOpen,
}: Props) {
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

const DropdownHandleWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  width: fit-content;
  cursor: pointer;
  border-radius: 160px;
  font-size: 16px;
  line-height: 20px;
  ${({ theme }) => css`
    ${getBackgroundStyle({
      color: theme.colors.background.primary,
      opacity: 0.88,
      blur: 10,
    })}
    &:hover {
      ${getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: 0.04,
        blur: 10,
      })}
    }
  `}
`;

Dropdown.Handle = function ({ children }: { children: ReactNode }) {
  return <DropdownHandleWrapper>{children}</DropdownHandleWrapper>;
};

const DropdownMenuWrapper = styled.div`
  padding: 16px 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${({ theme }) =>
    getBackgroundStyle({
      color: theme.colors.background.primary,
      blur: theme.background.blur,
      opacity: 0.88,
    })}
`;

Dropdown.Menu = function ({ children }: { children: ReactNode }) {
  return <DropdownMenuWrapper>{children}</DropdownMenuWrapper>;
};

const DropdownMenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownMenuGroupLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 16px;
  padding: 2px 16px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

Dropdown.MenuGroup = function ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <DropdownMenuGroupWrapper>
      <DropdownMenuGroupLabel>{label}</DropdownMenuGroupLabel>
      {children}
    </DropdownMenuGroupWrapper>
  );
};

const DropdownMenuItemButton = styled.button<{ $isActive?: boolean }>`
  height: 26px;
  padding: 0 8px;
  color: #fff;
  background: none;
  border: none;
  outline: none;
`;

const DropdownMenuItemText = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  padding: 6px 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${({ theme }) =>
      getBackgroundStyle({
        color: theme.colors.background.secondary,
        opacity: 0.2,
      })}
  }
`;

const DropdownMenuItemActiveMark = styled.div<{ $isActive?: boolean }>`
  position: relative;
  top: -30px;
  left: -8px;
  width: 2px;
  height: 28px;
  background-color: #fff;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

Dropdown.MenuItem = function ({
  children,
  onClick,
  isActive,
}: {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <DropdownMenuItemButton $isActive={isActive} onClick={onClick}>
      <DropdownMenuItemText>{children}</DropdownMenuItemText>
      {isActive && <DropdownMenuItemActiveMark />}
    </DropdownMenuItemButton>
  );
};
