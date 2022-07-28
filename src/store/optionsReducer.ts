import { createSlice } from '@reduxjs/toolkit';

type BookmarkState = {
  newTab: boolean,
}

const initialOptions: BookmarkState = {
  newTab: false,
};

const optionsSlice = createSlice({
  name: 'optionsReducermark',
  initialState: initialOptions,
  reducers: {
    changeState(state) {
      state.newTab = !state.newTab
      localStorage.setItem('newTab', String(state.newTab));
    },
    getLocalStorage(state) {
      const storage = (localStorage.getItem('newTab')); // 'dark'
      if (storage) {
        state.newTab = storage === 'true'
      } else {
        localStorage.setItem('newTab', String(state.newTab));
      }
    }

  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;