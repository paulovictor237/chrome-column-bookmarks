import { Folder } from '@/domain/entities/folder';
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

export interface Props {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  mapId: number;
  folder: Folder;
  status?: string;
}
