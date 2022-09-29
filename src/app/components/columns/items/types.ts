import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';

export type Props = JSX.IntrinsicElements['div'] & {
  item: Site | Folder;
  columnIndex: number;
};
