import { OptionsState } from './types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// export const useBookmarks = create<BookmarkState>()(devtools(immer(persist(
export const useMenuOptions = create<OptionsState>()(
  devtools(
    immer(
      persist((set, get) => ({
        newTab: false,
        enableEditor: false,
        changeNewTab: () => {
          const newTab = get().newTab;
          set((state) => void (state.newTab = !newTab));
          localStorage.setItem('newTab', String(newTab));
        },
        changeEnableEditor: () => {
          const enableEditor = get().enableEditor;
          set((state) => void (state.enableEditor = !enableEditor));
        },
        getLocalStorage: () => {
          const storage = localStorage.getItem('newTab');
          if (!storage) localStorage.setItem('newTab', String(get().newTab));
          if (storage) set((state) => void (state.newTab = storage === 'true'));
        },
      }))
    )
  )
);
