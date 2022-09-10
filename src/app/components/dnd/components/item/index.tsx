import { Draggable } from 'react-beautiful-dnd';
import { Props } from './types';

export const DragDropItem = ({ item, index, ind }: Props) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <section
          ref={provided.innerRef}
          className={`select-none	p-2 m-2 border rounded 
          ${snapshot.isDragging ? 'bg-green-500' : 'bg-gray-500'}`}
          style={provided.draggableProps.style}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-around">
            {item.content}
            {/* <Delete ind={ind} index={index} /> */}
          </div>
        </section>
      )}
    </Draggable>
  );
};
