import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import bookmarks from '@/infra/assets/bookmarks.json';
import {
  chromeAddListener,
  chromeSearch,
  getBookmarks,
} from '@/infra/services/chrome';
import { searchSites } from '@/infra/services/search';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { bookmark, searchFolder } from './init';
import { BookmarkState } from './types';

export const useBookmarks = create<BookmarkState>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          columns: [],
          bookmark: bookmark,
          searchResults: false,
          searchKeywords: false,
          searchFolder: searchFolder,
          onChangedCallback: async (id, changeInfo) => {
            const isDevMode = process.env.NODE_ENV === 'development';
            const data = isDevMode ? bookmarks : await getBookmarks();
            if (!data[0]?.children) return;
            const [bookmark, otherBookmark] = data[0].children;
            if ((otherBookmark as Folder).children?.length > 0) {
              (bookmark as Folder).children.push(otherBookmark as Folder);
            }
            set((state) => {
              state.bookmark = bookmark as Folder;
              state.columns = [bookmark as Folder];
            });
          },
          initBookmark: async () => {
            const onChangedCallback = get().onChangedCallback;
            onChangedCallback();
            chromeAddListener(onChangedCallback);
          },
          increment: (id, index) => {
            const newFolder = get().columns[index].children.find(
              (item) => item.id === id
            );
            if (!newFolder) return;
            if (index < get().columns.length - 1) {
              const newColumns = get().columns.slice(0, index + 1);
              newColumns.push(newFolder as Folder);
              set((state) => void (state.columns = newColumns));
            } else {
              set((state) => void state.columns.push(newFolder as Folder));
            }
          },
          setColumns: (data) => {
            set((state) => {
              state.columns = data;
            });
          },
          search: async (keyword) => {
            if (!keyword || keyword.trim() === '') {
              set((state) => {
                state.searchFolder.children = [];
                state.searchKeywords = false;
                state.searchResults = false;
              });
              return;
            }
            let result: Site[] = [];
            const isDevMode = process.env.NODE_ENV === 'development';
            if (isDevMode) result = searchSites(keyword, get().bookmark);
            else {
              const rs = await chromeSearch(keyword);
              result = rs !== null ? rs : searchSites(keyword, get().bookmark);
            }
            set((state) => {
              state.searchFolder.children = result;
              state.searchKeywords = true;
              state.searchResults = result.length > 0;
            });
          },
        }),
        {
          name: 'Store only Columns',
          partialize: (state) => ({
            columns: state.columns,
            bookmark: state.bookmark,
          }),
        }
      )
    )
  )
);
