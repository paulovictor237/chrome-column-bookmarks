import { ColumnItem } from '@/app/components/columns/items';
import { Draggable } from 'react-beautiful-dnd';
import { Props } from './types';

export const DragDropItem = ({ item, columId, itemId }: Props) => {
  return (
    <Draggable draggableId={item.id} index={itemId}>
      {(provided, snapshot) => (
        <ColumnItem
          key={item.id + 'ColumnItem'}
          item={item}
          columnIndex={columId}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
          className={
            snapshot.isDragging
              ? 'outline outline-2 outline-warcraft-red rounded-md'
              : ''
          }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};
