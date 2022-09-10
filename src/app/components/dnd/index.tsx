import { useBookmarks } from '@/app/zustand/bookmarks';
import { Folder } from '@/domain/entities/folder';
import { AnimatePresence } from 'framer-motion';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { SearchColumn } from '../columns/search';
import { dndOnDragEnd } from './assets/tools';
import { DragDropColumn } from './components/column';

export const Dragdrop = () => {
  const columns = useBookmarks((state) => state.columns);
  const setColumns = useBookmarks((state) => state.setColumns);

  const handlerOnDragEnd = (result: DropResult) => {
    dndOnDragEnd(result, columns, (a: Folder[]) => setColumns(a));
  };

  return (
    <DragDropContext onDragEnd={handlerOnDragEnd}>
      <div className=" overflow-x-auto w-full flex sc2 p-1 h-full">
        <AnimatePresence presenceAffectsLayout>
          <SearchColumn />
          {columns.map((folder, mapId) => (
            <Droppable
              key={folder.id + 'dnd'}
              droppableId={mapId.toString()}
              isDropDisabled={false}
            >
              {(provided, snapshot) => (
                <DragDropColumn
                  mapId={mapId}
                  folder={folder}
                  snapshot={snapshot}
                  provided={provided}
                />
              )}
            </Droppable>
          ))}
        </AnimatePresence>
      </div>
    </DragDropContext>
  );
};
