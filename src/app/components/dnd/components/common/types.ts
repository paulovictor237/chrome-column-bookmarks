import { Item } from '../../assets/tools/types';

export interface DeleteProps {
  ind: number;
  index: number;
  state: Item[][];
  setState: (e: Item[][]) => void;
}
