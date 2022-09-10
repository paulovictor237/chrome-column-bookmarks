import { getListStyle } from '../../assets/tools';
import { DragDropItem } from '../item';
import { Props } from './types';

export const DragDropColumn = ({ provided, snapshot, el, ind }: Props) => {
  return (
    <section
      ref={provided.innerRef}
      style={getListStyle(snapshot.isDraggingOver)}
      {...provided.droppableProps}
    >
      {el.map((item, index) => (
        <DragDropItem key={ind} ind={ind} item={item} index={index} />
      ))}
      {provided.placeholder}
    </section>
  );
};
