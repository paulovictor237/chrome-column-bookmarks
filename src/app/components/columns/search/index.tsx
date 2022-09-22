import { useBookmarks } from '@/app/zustand/bookmarks';
import { Column } from '../column';

export const SearchColumn = () => {
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);

  return (
    <>
      {searchKeywords && (
        <Column
          index={-1}
          title={searchResults ? 'search' : 'no results'}
          column={searchFolder}
          showTitle
        />
      )}
    </>
  );
};
