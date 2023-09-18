import { RecentColumn } from '@/client/components/organisms/columns/recent';
import { useBookmarks } from '@/client/zustand/bookmarks';
import { ColumnType } from '@/infra/types/column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { dndOnDragEnd } from './assets/tools';
import { DragDropColumn } from './components/column';
import { ColumnTree } from '../../molecules/column-tree';
import { SearchColumn } from '../../organisms/columns/search';
import { useFavorites } from '@/client/zustand/favorites';

export const ColumnsControllerDND = () => {
  const columns = useBookmarks((state) => state.columns);
  const setColumns = useBookmarks((state) => state.setColumns);
  const favorites = useFavorites((state) => state.favorites);

  const handlerOnDragEnd = (result: DropResult) => {
    dndOnDragEnd(result, columns, (a: ColumnType[]) => setColumns(a));
  };

  return (
    <DragDropContext onDragEnd={handlerOnDragEnd}>
      <ColumnTree>
        <SearchColumn key={'SearchColumn'} />
        <RecentColumn key={'RecentColumn'} />
        {/* TODO: adicionar favoritos */}
        {columns.map((column, columnIndex) => (
          <DragDropColumn
            key={column.id + 'DragDropColumn'}
            columnIndex={columnIndex}
            column={column}
          />
        ))}
      </ColumnTree>
    </DragDropContext>
  );
};
