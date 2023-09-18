import { Folder } from '@/infra/types/folder';
import { Site } from '@/infra/types/site';
import { ReactNode } from 'react';

export type Props = {
  title?: string;
  link?: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  showMenu?: boolean;
  className?: string;
  children?: ReactNode;
  item?: Site | Folder;
};
