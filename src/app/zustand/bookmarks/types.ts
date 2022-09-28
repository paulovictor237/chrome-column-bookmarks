import { ColumnType } from '@/domain/entities/column';

export type BookmarkState = {
  bookmark: ColumnType;
  searchColumn: ColumnType;
  searchResults: boolean;
  searchKeywords: boolean;
  columns: ColumnType[];
  initialState: () => void;
  addColumn: (id: string, index: number) => void;
  search: (keyword: string) => void;
  onChangedCallback: () => void;
  setColumns: (columns: ColumnType[]) => void;
};
