import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ZustandStoreImmer } from '../types';
import { Props } from './types';

const contextMenuStore: ZustandStoreImmer<Props> = (set, get) => ({
  item: undefined,
  showContextMenu: false,
  pos: { x: 0, y: 0, column: false },
  onContextMenu: (pos, item) => {
    set((state) => {
      state.pos = pos;
      state.item = item;
      state.showContextMenu = true;
    });
  },
  closeContextMenu: () => {
    set((state) => {
      state.showContextMenu = false;
    });
  },
  cleanId: () => {
    set((state) => {
      state.item = undefined;
    });
  },
  closeAndClean: () => {
    set((state) => {
      state.item = undefined;
      state.showContextMenu = false;
    });
  },
});

export const useContextMenu = create(immer(contextMenuStore));
