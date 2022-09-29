import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Props } from './types';

export const useContextMenu = create<Props>()(
  devtools(
    immer((set, get) => ({
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
    }))
  )
);
