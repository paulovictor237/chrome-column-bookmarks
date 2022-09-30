import { DragDropColumn } from '@/app/submodules/columns-controler-dnd/components/column';
import { useBookmarks } from '@/app/zustand/bookmarks';

export const SearchColumn = () => {
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchColumn = useBookmarks((state) => state.searchColumn);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);

  if (!searchKeywords) return null;
  return (
    <DragDropColumn
      columnIndex={-2}
      column={searchColumn}
      title={searchResults ? 'search' : 'no results'}
      prefixId="search"
      isDropDisabled
    />
  );
};
