import { ColumnItem } from '@/app/components/columns/items';
import { Site } from '@/domain/entities/site';
import { Draggable } from 'react-beautiful-dnd';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const DragDropItem = ({ item, columId, itemId }: Props) => {
  const isSite = !!(item as Site).url;
  return (
    <Draggable draggableId={item.id} index={itemId}>
      {(provided, snapshot) => (
        <ColumnItem
          key={item.id + 'ColumnItem'}
          item={item}
          columnIndex={columId}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
          className={twMerge(
            snapshot.isDragging &&
              'outline outline-2 outline-warcraft-red rounded-md',
            snapshot.combineTargetFor &&
              !isSite &&
              'outline-2 outline outline-warcraft-yellow rounded-md brightness-[60%]'
          )}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};
