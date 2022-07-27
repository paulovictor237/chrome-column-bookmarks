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

const initialSiteState: BookmarkState = {
  counter: 0,
  showCounter: true,
  Bookmark: initialFolder,
  otherBookmark: initialFolder,
  columns: []
};

const SiteSlice = createSlice({
  name: 'Sitemark',
  initialState: initialSiteState,
  reducers: {
    increment(state, action) {
      const newFolder = (state.Bookmark.children.find(item => item.id === action.payload)) as Folder;
      state.columns.push(newFolder);
    },
    initBookmark(state, action) {
      // console.log(action.payload[0].children);
      state.Bookmark = action.payload[0].children[0];
      state.otherBookmark = action.payload[0].children[1];
      state.columns.push(state.Bookmark)
    }
  },
});

export const SiteActions = SiteSlice.actions;

export default SiteSlice.reducer;