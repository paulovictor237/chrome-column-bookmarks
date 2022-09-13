import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { Column } from '../column';

export const SearchColumn = () => {
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);

  return (
    <>
      {searchKeywords && (
        <Column
          key={-500}
          folder={searchFolder}
          index={-1}
          status={searchResults ? 'search' : 'no results'}
        />
      )}
    </>
  );
};
