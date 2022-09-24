import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};
