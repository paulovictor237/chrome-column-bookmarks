import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ZustandStoreImmer } from '../types';
import { Props } from './types';

const contextMenuStore: ZustandStoreImmer<Props> = (set, get) => ({
  item: undefined,
  showContextMenu: false,
  onContextMenu: (e, item) => {
    e.preventDefault();
    set((state) => {
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
