import { ReactNode } from 'react';

export type Props = {
  name: string;
  icon: ReactNode;
  onClick: () => void;
};
