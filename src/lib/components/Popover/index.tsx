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

interface Props {
  placement?: string;
  children: React.ReactNode;
}

export default function Popover({ placement = 'top', children }: Props) {
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
