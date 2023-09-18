import {
  Create,
  Delete,
  Update,
} from '@/client/components/molecules/modal-operations';
import { useMauseEventMenu } from '@/client/hooks/useMauseEventMenu';
import { useContextMenu } from '@/client/zustand/context-menu';
import { Site } from '@/infra/types/site';
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { MdFileDownload } from 'react-icons/md';
import { MdUpload } from 'react-icons/md';
import { MdDeleteForever, MdPushPin } from 'react-icons/md';
import { Export } from '../../molecules/modal-operations/export';
import { Import } from '../../molecules/modal-operations/import';
import { ContextMenuButton } from './components/button';
import { twMerge } from 'tailwind-merge';
import { ReactPortal } from '@/client/components/organisms/react-portal';

export const ContextMenu = () => {
  const showContextMenu = useContextMenu((state) => state.showContextMenu);
  const closeAndClean = useContextMenu((state) => state.closeAndClean);
  const item = useContextMenu((state) => state.item);
  const pos = useContextMenu((state) => state.pos);
  const url = item && (item as Site).url;

  const offsetPosition = { left: pos.x, top: pos.y };

  const yPosition = pos.y + window.pageYOffset;
  const bottom = yPosition > window.innerHeight / 2;

  const { ref } = useMauseEventMenu(closeAndClean);

  const cleanId = useContextMenu((state) => state.cleanId);

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [importModal, setImportModal] = useState(false);

  const CloseCreate = () => void (setCreateModal(false), cleanId());
  const CloseUpdate = () => void (setUpdateModal(false), cleanId());
  const CloseDelete = () => void (setDeleteModal(false), cleanId());
  const CloseIMport = () => void (setImportModal(false), cleanId());

  return (
    <ReactPortal wrapperId="react-portal-context-menu">
      <Create isOpen={createModal} handleClose={CloseCreate} />
      <Update isOpen={updateModal} handleClose={CloseUpdate} />
      <Delete isOpen={deleteModal} handleClose={CloseDelete} />
      <Import isOpen={importModal} handleClose={CloseIMport} />
      {showContextMenu && (
        <section
          ref={ref}
          className={twMerge(
            'absolute w-28',
            !pos.column ? '-translate-x-full' : '-translate-x-1/2',
            bottom && '-translate-y-[89%]'
          )}
          style={offsetPosition}
        >
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
            {!url && (
              <ContextMenuButton
                name="export"
                icon={<MdFileDownload />}
                onClick={() => Export(item!.id)}
              />
            )}
            {!url && (
              <ContextMenuButton
                name="import"
                icon={<MdUpload />}
                onClick={() => setImportModal(true)}
              />
            )}
          </div>
        </section>
      )}
    </ReactPortal>
  );
};
