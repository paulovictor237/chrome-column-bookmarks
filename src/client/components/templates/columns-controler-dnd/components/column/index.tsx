import { Droppable } from 'react-beautiful-dnd';
import { DragDropItem } from '../item';
import { Props } from './types';
import { Column } from '@/client/components/molecules/column-box';

export const DragDropColumn = ({
  columnIndex,
  column,
  isDropDisabled,
  prefixId,
  ...rest
}: Props) => {
  return (
    <Droppable
      isCombineEnabled
      isDropDisabled={isDropDisabled}
      droppableId={columnIndex.toString()}
    >
      {(provided, snapshot) => (
        <Column
          className={snapshot.isDraggingOver ? 'bg-peve-gray' : ''}
          threeDots={column.children.length === 0}
          ref={provided.innerRef}
          classNameTitle={rest.classNameTitle}
          defaultTitle={rest.title}
          column={column}
          {...provided.droppableProps}
        >
          {column.children?.map((item, itemId) => (
            <DragDropItem
              key={item.id + 'DragDropItem'}
              item={prefixId ? { ...item, id: prefixId + item.id } : item}
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
