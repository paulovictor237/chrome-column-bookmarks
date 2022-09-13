import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';

export type BookmarkState = {
  showCounter: boolean;
  bookmark: Folder;
  searchFolder: Folder;
  searchResults: boolean;
  searchKeywords: boolean;
  columns: Folder[];
  initBookmark: () => void;
  increment: (id: string, index: number) => void;
  search: (keyword: string) => void;
  setColumns: (data: Folder[]) => void;
};
