import { RecentColumn } from '@/app/components/columns/recent';
import { SearchColumn } from '@/app/components/columns/search';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { ColumnType } from '@/domain/entities/column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ColumnTree } from '../../components/columns/column-tree';
import { dndOnDragEnd } from './assets/tools';
import { DragDropColumn } from './components/column';

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
