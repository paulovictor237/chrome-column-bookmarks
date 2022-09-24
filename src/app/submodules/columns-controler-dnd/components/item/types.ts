import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';

export interface Props {
  item: Folder | Site;
  columId: number;
  itemId: number;
}
