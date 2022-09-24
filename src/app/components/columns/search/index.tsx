import { useBookmarks } from '@/app/zustand/bookmarks';
import { Column } from '../column';
import { ColumnItem } from '../items';

export const SearchColumn = () => {
  const searchResults = useBookmarks((state) => state.searchResults);
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);

  return (
    <>
      {searchKeywords && (
        <Column title={searchResults ? 'search' : 'no results'} showTitle>
          {searchFolder.children?.map((item, columnIndex) => (
            <ColumnItem
              key={item.id + 'ColumnItem'}
              item={item}
              columnIndex={columnIndex}
            />
          ))}
        </Column>
      )}
    </>
  );
};
