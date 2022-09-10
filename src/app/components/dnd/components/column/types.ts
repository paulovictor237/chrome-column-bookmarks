import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Item } from '../../assets/tools/types';

export interface Props {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
  el: Item[];
  ind: number;
}
