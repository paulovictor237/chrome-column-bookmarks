import { DragDropItem } from '../item';
import { Props } from './types';

export const DragDropColumn = ({ provided, snapshot, el, ind }: Props) => {
  return (
    <section
      ref={provided.innerRef}
      className={`bg-red-600 w-64 h-[40rem] p-2 border 
      ${snapshot.isDraggingOver ? 'bg-blue-400' : 'bg-blue-500'}`}
      {...provided.droppableProps}
    >
      {el.map((item, index) => (
        <DragDropItem key={ind} ind={ind} item={item} index={index} />
      ))}
      {provided.placeholder}
    </section>
  );
};
