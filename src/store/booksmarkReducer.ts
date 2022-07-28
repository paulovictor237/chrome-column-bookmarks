import { createSlice } from '@reduxjs/toolkit';
import { getBookmarks } from '../services/chromeService';
import { Folder } from '../types/Folder';
import { ChromeBookmark } from "./../types/ChromeBookmark";

export const fetchBookmark = async () => {
  const gettingTree = await getBookmarks()
  return gettingTree
};

type BookmarkState = {
  counter: number,
  showCounter: boolean,
  Bookmark: Folder,
  otherBookmark: Folder
  columns: Folder[]
}

const initialFolder: Folder = {
  children: [],
  dateAdded: 0,
  dateGroupModified: 0,
  id: '',
  index: 0,
  parentId: '',
  title: ''
}

const initialSite: BookmarkState = {
  counter: 0,
  showCounter: true,
  Bookmark: initialFolder,
  otherBookmark: initialFolder,
  columns: []
};

const SiteSlice = createSlice({
  name: 'Sitemark',
  initialState: initialSite,
  reducers: {
    increment(state, action: { payload: { id: string, index: number } }) {
      const newFolder = (state.columns[action.payload.index].children.find(item => item.id === action.payload.id)) as Folder;
      if (action.payload.index < state.columns.length - 1) {
        state.columns = state.columns.slice(0, action.payload.index + 1);
        state.columns.push(newFolder);
      } else {
        state.columns.push(newFolder);
      }
    },
    initBookmark(state, action) {
      state.Bookmark = action.payload[0].children[0];
      state.otherBookmark = action.payload[0].children[1];
      state.columns.push(state.Bookmark)
      state.columns[0].children.push(state.otherBookmark)
    }
  },
});

export const SiteActions = SiteSlice.actions;

export default SiteSlice.reducer;