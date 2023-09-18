import { Folder } from '@/infra/types/folder';
import { Site } from '@/infra/types/site';

export interface Props {
  item: Folder | Site;
  columId: number;
  itemId: number;
}
