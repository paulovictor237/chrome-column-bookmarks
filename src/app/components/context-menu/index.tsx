import { Create, Delete, Update } from '@/app/components/operations';
import { useMauseEventMenu } from '@/app/hooks/useMauseEventMenu';
import { useContextMenu } from '@/app/zustand/context-menu';
import { Site } from '@/domain/entities/site';
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdDeleteForever, MdPushPin } from 'react-icons/md';
import ReactPortal from '../tools/react-portal';
import { ContextMenuButton } from './components/button';

export const ContextMenu = () => {
  const showContextMenu = useContextMenu((state) => state.showContextMenu);
  const closeAndClean = useContextMenu((state) => state.closeAndClean);
  const item = useContextMenu((state) => state.item);
  const url = item && (item as Site).url;

  const hooksMauseEvent = useMauseEventMenu(closeAndClean);
  const { ref, offsetPossition } = hooksMauseEvent;

  const cleanId = useContextMenu((state) => state.cleanId);

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const CloseCreate = () => void (setCreateModal(false), cleanId());
  const CloseUpdate = () => void (setUpdateModal(false), cleanId());
  const CloseDelete = () => void (setDeleteModal(false), cleanId());

  return (
    <ReactPortal wrapperId="react-portal-context-menu">
      <Create isOpen={createModal} handleClose={CloseCreate} />
      <Update isOpen={updateModal} handleClose={CloseUpdate} />
      <Delete isOpen={deleteModal} handleClose={CloseDelete} />
      {showContextMenu && (
        <section ref={ref} className="absolute w-28" style={offsetPossition}>
          <div className="bg-peve-light border-warcraft-yellow flex flex-col gap-1.5  p-1.5 rounded-lg border-2 ">
            {!url && (
              <ContextMenuButton
                name="create"
                icon={<AiFillPlusCircle />}
                onClick={() => setCreateModal(true)}
              />
            )}
            <ContextMenuButton
              name="update"
              icon={<MdPushPin />}
              onClick={() => setUpdateModal(true)}
            />
            <ContextMenuButton
              name="delete"
              icon={<MdDeleteForever />}
              onClick={() => setDeleteModal(true)}
            />
          </div>
        </section>
      )}
    </ReactPortal>
  );
};
