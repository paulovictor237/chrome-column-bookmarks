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
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { BookmarkState } from './types';

export const useBookmarks = create<BookmarkState>()(
  devtools(
    immer(
      // persist(
      (set, get) => ({
        columns: [],
        bookmark: { id: '1', children: [] },
        searchFolder: { id: '-1', children: [] },
        searchResults: false,
        searchKeywords: false,
        initialState: async () => {
          const isDevMode = process.env.NODE_ENV === 'development';
          const data = get().bookmark;
          try {
            const bookmark = await chromeGetChildren('1');
            const otherBookmark = await chromeGetChildren('0');
            if (otherBookmark[1]) bookmark.push(otherBookmark[1]);
            data.children = bookmark;
          } catch (error) {
            const local = localBookmarks[0].children;
            const bookmark = local[0].children as ColumnChildren;
            const otherBookmark = local[1];
            if (otherBookmark) bookmark.push(otherBookmark);
            data.children = bookmark;
          }
          set((state) => {
            state.bookmark = data;
            state.columns = [data];
          });
          const onChangedCallback = get().onChangedCallback;
          chromeAddListener(onChangedCallback);
        },
        addColumn: async (id, index) => {
          let data: ColumnType = { id, children: [] };
          try {
            data.children = await chromeGetChildren(id);
          } catch (error) {
            const newFolder = searchLocalColumn(id, get().bookmark);
            data = newFolder;
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
              state.searchFolder.children = [];
              state.searchKeywords = false;
              state.searchResults = false;
            });
          }
          let searchItens: Site[] = [];
          try {
            searchItens = await chromeSearch(keyword);
          } catch (error) {
            searchItens = searchLocalSites(keyword, get().bookmark);
          }
          set((state) => {
            state.searchFolder.children = searchItens;
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
          const otherBookmark = columns[0].children.find((a) => a.id === '2');
          if (!!otherBookmark) newColumns[0].children.push(otherBookmark);
          set((state) => void (state.columns = newColumns));
        },
      })
      //   {
      //     name: 'Store only Columns',
      //     partialize: (state) => ({
      //       // columns: state.columns,
      //       // bookmark: state.bookmark,
      //     }),
      //   }
      // )
    )
  )
);
