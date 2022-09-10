import { Item } from '../../assets/tools/types';

export type DeleteProps = {
  ind: number;
  index: number;
  state: Item[][];
  setState: (e: Item[][]) => void;
};
