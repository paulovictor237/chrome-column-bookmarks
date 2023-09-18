import { RecentColumn } from '@/client/components/organisms/columns/recent';
import { useBookmarks } from '@/client/zustand/bookmarks';
import { ColumnType } from '@/infra/types/column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { dndOnDragEnd } from './assets/tools';
import { DragDropColumn } from './components/column';
import { ColumnTree } from '../column-tree';
import { SearchColumn } from '../../organisms/columns/search';

export const ColumnsControllerDND = () => {
  const columns = useBookmarks((state) => state.columns);
  const setColumns = useBookmarks((state) => state.setColumns);

  const handlerOnDragEnd = (result: DropResult) => {
    dndOnDragEnd(result, columns, (a: ColumnType[]) => setColumns(a));
  };

  return (
    <DragDropContext onDragEnd={handlerOnDragEnd}>
      <ColumnTree>
        <SearchColumn key={'SearchColumn'} />
        <RecentColumn key={'RecentColumn'} />
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
