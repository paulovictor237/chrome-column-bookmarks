import { Delete, Update } from '@/app/components/operations';
import { useMauseEventMenu } from '@/app/hooks/useMauseEventMenu';
import { useContextMenu } from '@/app/zustand/context-menu';
import { useState } from 'react';
import { MdDeleteForever, MdPushPin } from 'react-icons/md';
import ReactPortal from '../tools/react-portal';
import { ContextMenuButton } from './components/button';

export const ContextMenu = () => {
  const itemId = useContextMenu((state) => state.itemId);
  const showContextMenu = useContextMenu((state) => state.showContextMenu);
  const closeAndClean = useContextMenu((state) => state.closeAndClean);
  const cleanId = useContextMenu((state) => state.cleanId);
  const { ref, globalCoords } = useMauseEventMenu(closeAndClean);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const CloseUpdate = () => {
    setUpdateModal((p) => !p);
    cleanId();
  };
  const CloseDelete = () => {
    setDeleteModal((p) => !p);
    cleanId();
  };

  return (
    <ReactPortal wrapperId="react-portal-context-menu">
      <Update id={itemId} isOpen={updateModal} handleClose={CloseUpdate} />
      <Delete id={itemId} isOpen={deleteModal} handleClose={CloseDelete} />
      {showContextMenu && (
        <section ref={ref} className="absolute w-28" style={globalCoords}>
          <div className="bg-peve-light border-warcraft-yellow flex flex-col gap-1.5  p-1.5 rounded-lg border-2 ">
            <ContextMenuButton
              name="update"
              icon={<MdPushPin />}
              onClick={() => setUpdateModal((p) => !p)}
            />
            <ContextMenuButton
              name="delete"
              icon={<MdDeleteForever />}
              onClick={() => setDeleteModal((p) => !p)}
            />
          </div>
        </section>
      )}
    </ReactPortal>
  );
};
