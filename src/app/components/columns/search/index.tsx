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
          showTitle
          folder={searchFolder}
          index={-1}
          title={searchResults ? 'search' : 'no results'}
          className={
            (searchResults ? 'bg-green-600' : 'bg-red-600') + ' bg-opacity-50'
          }
        />
      )}
    </>
  );
};
