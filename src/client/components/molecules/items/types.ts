import { Folder } from '@/infra/types/folder';
import { Site } from '@/infra/types/site';

export type Props = JSX.IntrinsicElements['div'] & {
  item: Site | Folder;
  columnIndex: number;
};
