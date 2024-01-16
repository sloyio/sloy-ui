import styled, { css } from 'styled-components';
import { ReactNode, useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import { SheetDetent } from 'react-modal-sheet/dist/types';
import { getBackgroundStyle } from '../../utils/getBackgroundStyle';

export interface SheetModalProps {
  snapPoints?: number[];
  fullHeight?: boolean;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: VoidFunction;
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-header:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 80px;
  }

  .react-modal-sheet-container,
  .react-modal-sheet-header,
  .react-modal-sheet-content {
    ${({ theme }) => css`
      ${getBackgroundStyle({
        color: theme.colors.background.primary,
        opacity: theme.background.opacity.default,
        blur: theme.background.blur,
        imporant: true,
      })};
    `}
  }

  .react-modal-sheet-container,
  .react-modal-sheet-header {
    border-radius: 10px 10px 0 0 !important;
  }
`;

export function SheetModal({
  children,
  isOpen = false,
  onClose,
  fullHeight,
  snapPoints,
}: SheetModalProps) {
  const ref = useRef<SheetRef>();

  const fullHeightProps = fullHeight
    ? {
        detent: 'full-height' as SheetDetent,
      }
    : {};

  const closeProps = onClose
    ? { onClose }
    : { onClose: () => ref.current?.snapTo(1) };

  return (
    <CustomSheet
      ref={ref}
      isOpen={isOpen}
      snapPoints={snapPoints}
      {...fullHeightProps}
      {...closeProps}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </CustomSheet>
  );
}
