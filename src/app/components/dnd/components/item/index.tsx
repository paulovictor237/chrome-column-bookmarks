import { Draggable } from 'react-beautiful-dnd';
import { getItemStyle } from '../../assets/tools';
import { Props } from './types';

export const DragDropItem = ({ item, index, ind }: Props) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <section
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            {item.content}
            {/* <Delete ind={ind} index={index} /> */}
          </div>
        </section>
      )}
    </Draggable>
  );
};
