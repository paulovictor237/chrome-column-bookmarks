import { DropResult } from 'react-beautiful-dnd';
import { Item } from '../../assets/tools/types';

export interface Props {
  OnDragEnd: (result: DropResult) => void;
  state: Item[][];
}
