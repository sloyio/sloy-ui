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
import React, { useState } from 'react';

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

export function Popover({ placement = 'top', children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  if (!referenceContent || !popoverContent) return;

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
