import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';

export type BookmarkState = {
  showCounter: boolean;
  bookmark: Folder;
  searchFolder: Folder;
  searchResults: boolean;
  columns: Folder[];
  initBookmark: () => void;
  increment: (id: string, index: number) => void;
  search: (keyword: Site[]) => void;
};
