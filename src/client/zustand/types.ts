import { StateCreator } from 'zustand';

export type ZustandInitializer<T> = StateCreator<T, [], [], T>;

export type ZustandStoreImmer<T> = StateCreator<
  T,
  [['zustand/immer', never]],
  [],
  T
>;
