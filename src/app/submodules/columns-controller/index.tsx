import { Column } from '@/app/components/columns/column';
import { ColumnTree } from '@/app/components/columns/column-tree';
import { ColumnItem } from '@/app/components/columns/items';
import { useBookmarks } from '@/app/zustand/bookmarks';

export const ColumnsController = () => {
  const columns = useBookmarks((state) => state.columns);
  return (
    <ColumnTree>
      {columns.map((column, columnIndex) => (
        <Column
          key={column.id + 'Column'}
          threeDots={column.children.length === 0}
        >
          {column.children?.map((item) => (
            <ColumnItem
              key={item.id + 'ColumnItem'}
              item={item}
              columnIndex={columnIndex}
            />
          ))}
        </Column>
      ))}
    </ColumnTree>
  );
};
