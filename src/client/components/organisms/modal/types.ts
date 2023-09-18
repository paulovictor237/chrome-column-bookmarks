import { ReactNode } from 'react';

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
};
