import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { chromeSearch, getBookmarks } from '@/infra/services/chrome';
import { searchChildrens, searchSites } from '@/infra/services/search';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { bookmark, searchFolder } from './init';
import { BookmarkState } from './types';

// export const useBookmarks = create<BookmarkState>()(devtools(immer(persist(
export const useBookmarks = create<BookmarkState>()(
  devtools(
    immer(
      persist((set, get) => ({
        columns: [],
        bookmark: bookmark,
        showCounter: true,
        searchResults: false,
        searchFolder: searchFolder,
        initBookmark: async () => {
          const data = await getBookmarks();
          if (!data[0]?.children) return;
          const bookmark = data[0].children[0] as Folder;
          const otherBookmark = data[0].children[1] as Folder;
          if (otherBookmark.children.length > 0) {
            bookmark.children.push(otherBookmark);
          }
          set((state) => void (state.bookmark = bookmark));
          set((state) => void (state.columns = [bookmark]));
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
          if (keyword === '') {
            return set((s) => void (s.searchFolder.children = []));
          }
          var result: Site[] = [];
          if (process.env.NODE_ENV === 'development') {
            result = searchSites(keyword, get().bookmark);
          } else {
            try {
              result = await chromeSearch(keyword);
            } catch (error) {
              console.error(error);
            }
          }
          set((state) => {
            state.searchFolder.children = result;
            state.searchResults = keyword.length > 0;
          });
        },
      }))
    )
  )
);
