import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { DragDropColumn } from '../column';
import { Props } from './types';

export const DragDropContextProvider = ({ OnDragEnd, state }: Props) => {
  return (
    <DragDropContext onDragEnd={OnDragEnd}>
      <section className="flex bg-green-500">
        {state.map((el, ind) => (
          <Droppable key={ind} droppableId={`${ind}`} isDropDisabled={false}>
            {(provided, snapshot) => (
              <DragDropColumn
                el={el}
                ind={ind}
                snapshot={snapshot}
                provided={provided}
              />
            )}
          </Droppable>
        ))}
      </section>
    </DragDropContext>
  );
};
