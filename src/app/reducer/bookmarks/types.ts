import { Folder } from '@/domain/entities/Folder';

export type BookmarkState = {
  counter: number;
  showCounter: boolean;
  Bookmark: Folder;
  otherBookmark: Folder;
  searchFolder: Folder;
  searchFolderLength: number;
  columns: Folder[];
};
