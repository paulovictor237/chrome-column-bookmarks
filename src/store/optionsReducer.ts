import { createSlice } from '@reduxjs/toolkit';

type OptionsState = {
  newTab: boolean,
  searchBar: boolean,
}

const initialOptions: OptionsState = {
  newTab: false,
  searchBar:false
};

const optionsSlice = createSlice({
  name: 'optionsReducermark',
  initialState: initialOptions,
  reducers: {
    changeState(state) {
      state.newTab = !state.newTab
      localStorage.setItem('newTab', String(state.newTab));
    },
    changeSearchBar(state,action) {
      state.searchBar = action.payload
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