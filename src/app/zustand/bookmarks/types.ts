import { ColumnType } from '@/domain/entities/column';
import { Folder } from '@/domain/entities/folder';

export type BookmarkState = {
  bookmark: ColumnType;
  searchFolder: ColumnType;
  searchResults: boolean;
  searchKeywords: boolean;
  columns: ColumnType[];
  initialState: () => void;
  addColumn: (folder: Folder, index: number) => void;
  search: (keyword: string) => void;
  onChangedCallback: () => void;
};
