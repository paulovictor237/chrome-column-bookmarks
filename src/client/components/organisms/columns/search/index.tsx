import { DragDropColumn } from '@/client/components/templates/columns-controler-dnd/components/column';
import { useBookmarks } from '@/client/zustand/bookmarks';

export const SearchColumn = () => {
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchColumn = useBookmarks((state) => state.searchColumn);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);

  if (!searchKeywords) return null;
  return (
    <DragDropColumn
      columnIndex={-2}
      column={searchColumn}
      title={searchResults ? 'Search' : 'no results'}
      prefixId="search"
      isDropDisabled
      classNameTitle="bg-green-700"
    />
  );
};
