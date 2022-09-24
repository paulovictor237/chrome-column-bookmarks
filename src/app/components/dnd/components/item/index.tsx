import { FolderUi } from '@/app/components/columns/folder-ui';
import { SiteUi } from '@/app/components/columns/site-ui';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { Draggable } from 'react-beautiful-dnd';
import { Props } from './types';

export const DragDropItem = ({ item, columId, mapId }: Props) => {
  const isSite = !!(item as Site).url;
  const isDraggingStyle = 'outline outline-2 outline-peve-selected rounded-md';
  return (
    <Draggable draggableId={item.id} index={mapId}>
      {(provided, snapshot) => (
        // <motion.div key={item.id} whileHover={{ scale: 1.03 }}>
        <section
          ref={provided.innerRef}
          className={snapshot.isDragging ? isDraggingStyle : ''}
          style={provided.draggableProps.style}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isSite && <SiteUi link={item as Site} />}
          {!isSite && <FolderUi folder={item as Folder} index={columId} />}
        </section>
        // </motion.div>
      )}
    </Draggable>
  );
};
