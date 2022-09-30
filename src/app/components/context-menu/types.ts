import { ReactNode } from 'react';

export type Options = {
  name: string;
  icon: ReactNode;
  action: () => void;
};
