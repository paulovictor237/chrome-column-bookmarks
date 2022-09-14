import { Folder } from '@/domain/entities/folder';

export type Props = JSX.IntrinsicElements['div'] & {
  folder: Folder;
  index: number;
  title?: string;
  className?: string;
  showTitle?: boolean;
};
