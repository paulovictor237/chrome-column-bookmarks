import { ColumnType } from '@/infra/types/column';
import { Folder } from '@/infra/types/folder';

export type BookmarkState = {
  bookmark: ColumnType;
  searchColumn: ColumnType;
  searchResults: boolean;
  searchKeywords: boolean;
  columns: ColumnType[];
  initialState: () => void;
  addColumn: (folder: Folder, index: number) => void;
  search: (keyword: string) => void;
  onChangedCallback: () => void;
  setColumns: (columns: ColumnType[]) => void;
  resetColumns: (parentId?: string) => void;
};
