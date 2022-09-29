import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Props } from './types';

export const useContextMenu = create<Props>()(
  devtools(
    immer((set, get) => ({
      itemId: '',
      showContextMenu: false,
      onContextMenu: (e, id) => {
        e.preventDefault();
        set((state) => {
          state.itemId = id;
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
          state.itemId = '';
        });
      },
      closeAndClean: () => {
        set((state) => {
          state.itemId = '';
          state.showContextMenu = false;
        });
      },
    }))
  )
);
