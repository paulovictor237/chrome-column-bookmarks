import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Props } from './types';

export const useContextMenu = create<Props>()(
  devtools(
    immer((set, get) => ({
      showMenuId: undefined,
      onContextMenu: (e, id) => {
        e.preventDefault();
        set((state) => {
          state.showMenuId = id;
        });
      },
      closeMenu: () => {
        set((state) => {
          state.showMenuId = undefined;
        });
      },
    }))
  )
);
