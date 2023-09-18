import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { ZustandStoreImmer } from '../types';
import { OptionsState } from './types';

const menuOptionsStore: ZustandStoreImmer<OptionsState> = (set, get) => ({
  favorites: [],
  isFavorite: (id) => get().favorites.includes(id),
  toggleId: (id) => {
    const isAlreadyFavorite = get().isFavorite(id);
    if (isAlreadyFavorite) return get().removeId(id);
    get().addId(id);
  },
  addId: (id) => {
    const newFavorite = get().favorites;
    newFavorite.push(id);
    set((state) => void (state.favorites = newFavorite));
  },
  removeId: (id) => {
    const newFavorite = get().favorites;
    newFavorite.filter((item) => item !== id);
    set((state) => void (state.favorites = newFavorite));
  },
  removeIndex: (index) => {
    const newFavorite = get().favorites;
    newFavorite.slice(index, 1);
    set((state) => void (state.favorites = newFavorite));
  },
  moveIndex: (index, mode) => {
    const newFavorite = get().favorites;
    const item = newFavorite[index];
    newFavorite.splice(index, 1);
    const position = mode === 'up' ? index - 1 : index + 1;
    newFavorite.splice(position, 0, item);
    set((state) => void (state.favorites = newFavorite));
  },
});

export const useFavorites = create(
  persist(immer(menuOptionsStore), { name: 'favorites' })
);
