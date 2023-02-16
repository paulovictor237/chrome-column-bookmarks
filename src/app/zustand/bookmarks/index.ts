import { VITE_DEV_MODE } from '@/domain/constants';
import { ColumnChildren, ColumnType } from '@/domain/entities/column';
import { Site } from '@/domain/entities/site';
import localBookmarks from '@/infra/assets/bookmarks.json';
import {
  chromeAddListener,
  chromeGetChildren,
  chromeSearch,
} from '@/infra/services/chrome';
import { searchLocalColumn, searchLocalSites } from '@/infra/services/search';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ZustandStoreImmer } from '../types';
import { BookmarkState } from './types';

const booksmarkStore: ZustandStoreImmer<BookmarkState> = (set, get) => ({
  columns: [],
  bookmark: { id: '1', title: 'Bookmarks bar', children: [] },
  searchColumn: { id: '2', title: 'Other bookmarks', children: [] },
  searchResults: false,
  searchKeywords: false,
  initialState: async () => {
    const data = get().bookmark;
    if (VITE_DEV_MODE) {
      const local = localBookmarks[0].children;
      const bookmark = local[0].children as ColumnChildren;
      const otherBookmark = local[1];
      if (otherBookmark) bookmark.push(otherBookmark);
      data.children = bookmark;
    } else {
      try {
        const bookmark = await chromeGetChildren('1');
        const otherBookmark = await chromeGetChildren('0');
        if (otherBookmark[1]) bookmark.push(otherBookmark[1]);
        data.children = bookmark;
      } catch (error) {
        console.error(error);
      }
    }
    set((state) => {
      state.bookmark = data;
      state.columns = [data];
    });
    const onChangedCallback = get().onChangedCallback;
    chromeAddListener(onChangedCallback);
  },
  addColumn: async (folder, index) => {
    let data: ColumnType = { ...folder, children: [] };
    if (VITE_DEV_MODE) {
      const newFolder = searchLocalColumn(folder.id, get().bookmark);
      data = newFolder;
    } else {
      try {
        data.children = await chromeGetChildren(folder.id);
      } catch (error) {
        console.error(error);
      }
    }
    set((state) => {
      if (index < get().columns.length - 1) {
        const newColumns = get().columns.slice(0, index + 1);
        newColumns.push(data);
        state.columns = newColumns;
      } else {
        state.columns.push(data);
      }
    });
  },
  search: async (keyword) => {
    if (!keyword || keyword.trim() === '') {
      return set((state) => {
        state.searchColumn.children = [];
        state.searchKeywords = false;
        state.searchResults = false;
      });
    }
    let searchItens: Site[] = [];
    if (VITE_DEV_MODE) {
      searchItens = searchLocalSites(keyword, get().bookmark);
    } else {
      try {
        searchItens = await chromeSearch(keyword);
      } catch (error) {
        console.error(error);
      }
    }
    set((state) => {
      state.searchColumn.children = searchItens;
      state.searchKeywords = true;
      state.searchResults = searchItens.length > 0;
    });
  },
  onChangedCallback: async () => {
    const columns = get().columns;
    const newColumns: ColumnType[] = [];
    for (const column of columns) {
      try {
        const children = await chromeGetChildren(column.id);
        const newColumn = { ...column, children };
        newColumns.push(newColumn);
      } catch (error) {
        Promise.reject(error);
      }
    }
    const otherBookmark = await chromeGetChildren('0');
    if (otherBookmark[1]) newColumns[0].children.push(otherBookmark[1]);
    set((state) => void (state.columns = newColumns));
  },
  setColumns: (columns) => {
    set((state) => void (state.columns = columns));
  },
  resetColumns: (parentId) => {
    if (parentId) {
      const columns = get().columns;
      const index = columns.findIndex((column) => column.id === parentId);
      set((state) => void (state.columns = columns.slice(0, index + 1)));
    } else {
      set((state) => void (state.columns = [state.columns[0]]));
    }
  },
});

export const useBookmarks = create(immer(booksmarkStore));
