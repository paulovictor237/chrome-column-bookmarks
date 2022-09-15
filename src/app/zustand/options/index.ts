import { OptionsState } from './types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useMenuOptions = create<OptionsState>()(
  devtools(
    immer((set, get) => ({
      newTab: false,
      showRecent: false,
      enableEditor: false,
      initOptions: () => {
        const storage = localStorage.getItem('newTab');
        set((state) => {
          if (storage) state.newTab = storage === 'true';
        });
      },
      changeNewTab: () => {
        const newTab = get().newTab;
        localStorage.setItem('newTab', String(!newTab));
        set((state) => void (state.newTab = !newTab));
      },
      changeRecent: () => {
        const showRecent = get().showRecent;
        set((state) => void (state.showRecent = !showRecent));
      },
      changeEnableEditor: () => {
        const enableEditor = get().enableEditor;
        set((state) => void (state.enableEditor = !enableEditor));
      },
    }))
  )
);
