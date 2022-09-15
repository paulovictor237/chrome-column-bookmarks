import { Folder } from '@/domain/entities/folder';

export type Props = JSX.IntrinsicElements['div'] & {
  folder: Folder;
  index: number;
  className?: string;
  showTitle?: boolean;
};
