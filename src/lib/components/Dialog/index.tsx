import { ReactNode } from 'react';

export interface DialogProps {
  children: ReactNode;
}

export function Dialog({ children }: DialogProps) {
  return children;
}
