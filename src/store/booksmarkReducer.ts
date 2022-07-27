import { createSlice } from '@reduxjs/toolkit';
import { getBookmarks } from '../services/chromeService';
import { ChromeBookmark } from "./../types/ChromeBookmark";

export const fetchBooksmark = async () => {
  const gettingTree = await getBookmarks()
  return gettingTree
};

type BookmarkState = {
  counter: number,
  showCounter: boolean
  booksmark: ChromeBookmark[]
}

const initialBooksState: BookmarkState = {
  counter: 0,
  showCounter: true,
  booksmark: []
};

const booksSlice = createSlice({
  name: 'Booksmark',
  initialState: initialBooksState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    replaceBooksmark(state, action) {
      state.booksmark = action.payload;
    }
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;