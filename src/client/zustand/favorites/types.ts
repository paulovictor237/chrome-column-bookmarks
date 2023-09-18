export type OptionsState = {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleId: (id: number) => void;
  addId: (id: number) => void;
  removeId: (id: number) => void;
  removeIndex: (id: number) => void;
  moveIndex: (id: number, mode: 'up' | 'down') => void;
};
