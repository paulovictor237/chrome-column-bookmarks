import { Folder } from '@/domain/entities/folder';
import bookmarks from '@/infra/assets/bookmarks.json';
import {
  chromeAddListener,
  chromeSearch,
  getBookmarks,
} from '@/infra/services/chrome';
import { searchSites } from '@/infra/services/search';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { bookmark, searchFolder } from './init';
import { BookmarkState } from './types';
// import { process.env.NODE_ENV === 'development' } from '@/infra/services/constants';

// export const useBookmarks = create<BookmarkState>()(devtools(immer(persist(
export const useBookmarks = create<BookmarkState>()(
  devtools(
    immer((set, get) => ({
      columns: [],
      bookmark: bookmark,
      showCounter: true,
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
          // data.map((column) => {
          //   searchChildrens({
          //     id: column.id,
          //     data: state.bookmark,
          //     replace: column.children,
          //   });
          // });
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
        const isDevMode = process.env.NODE_ENV === 'development';
        const result = isDevMode
          ? searchSites(keyword, get().bookmark)
          : await chromeSearch(keyword);
        set((state) => {
          state.searchFolder.children = result;
          state.searchKeywords = true;
          state.searchResults = result.length > 0;
        });
      },
    }))
  )
);
