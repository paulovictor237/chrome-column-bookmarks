import { createSlice } from '@reduxjs/toolkit';

type OptionsState = {
  newTab: boolean;
  searchBar: boolean;
  enableEditor: boolean;
};

const initialOptions: OptionsState = {
  newTab: false,
  searchBar: false,
  enableEditor: false,
};

const optionsSlice = createSlice({
  name: 'optionsReducermark',
  initialState: initialOptions,
  reducers: {
    changeNewTab(state) {
      state.newTab = !state.newTab;
      localStorage.setItem('newTab', String(state.newTab));
    },
    changeEnableEditor(state) {
      state.enableEditor = !state.enableEditor;
    },
    changeSearchBar(state, action) {
      state.searchBar = action.payload;
    },
    getLocalStorage(state) {
      const storage = localStorage.getItem('newTab'); // 'dark'
      if (storage) {
        state.newTab = storage === 'true';
      } else {
        localStorage.setItem('newTab', String(state.newTab));
      }
    },
  },
});

export const optionsActions = optionsSlice.actions;

export default optionsSlice.reducer;
