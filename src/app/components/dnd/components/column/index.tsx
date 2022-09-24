import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { DragDropItem } from '../item';
import { Props } from './types';

export const DragDropColumn = ({
  mapId: columId,
  folder,
  status,
  provided,
  snapshot,
}: Props) => {
  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };
  return (
    <div className="md:w-80 w-full p-2 flex-shrink-0">
      <section
        className={twMerge(
          'rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg',
          snapshot.isDraggingOver ? 'bg-gray-700' : 'bg-peve-light'
        )}
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        {status && (
          <title
            className={twMerge(
              'underline bg-opacity-50 select-none flex items-center justify-center p-1 mb-3 overflow-hidden h-10 rounded-md',
              folder.children.length > 0 ? 'bg-green-600' : 'bg-red-600'
            )}
          >
            {status}
          </title>
        )}
        <main className="flex flex-col gap-3">
          {folder.children?.map((item, mapId) => (
            <DragDropItem
              key={item.id}
              item={item}
              columId={columId}
              mapId={mapId}
            />
          ))}
        </main>
        {provided.placeholder}
      </section>
    </div>
  );
};
