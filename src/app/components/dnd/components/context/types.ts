import { DropResult } from 'react-beautiful-dnd';
import { Item } from '../../assets/tools/types';

export type Props = {
  OnDragEnd: (result: DropResult) => void;
  state: Item[][];
};
