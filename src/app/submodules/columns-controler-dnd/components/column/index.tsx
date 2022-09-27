import { Column } from '@/app/components/columns/column';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropItem } from '../item';
import { Props } from './types';

export const DragDropColumn = ({ columnIndex, column }: Props) => {
  return (
    <Droppable
      isCombineEnabled
      isDropDisabled={false}
      droppableId={columnIndex.toString()}
    >
      {(provided, snapshot) => (
        <Column
          className={snapshot.isDraggingOver ? 'bg-gray-700' : ''}
          threeDots={column.children.length === 0}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {column.children?.map((item, itemId) => (
            <DragDropItem
              key={item.id + 'DragDropItem'}
              item={item}
              itemId={itemId}
              columId={columnIndex}
            />
          ))}
          {provided.placeholder}
        </Column>
      )}
    </Droppable>
  );
};
