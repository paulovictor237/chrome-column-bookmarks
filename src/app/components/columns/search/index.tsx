import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { Column } from '../column';

export const SearchColumn = () => {
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchBar = useMenuOptions((state) => state.searchBar);

  return (
    <>
      {searchBar && (
        <Column
          key={-500}
          folder={searchFolder}
          index={-1}
          status={searchFolder.children.length > 0 ? 'search' : 'no results'}
        />
      )}
    </>
  );
};
