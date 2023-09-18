import { Button } from '@/client/components/atoms/buttom';
import Modal from '@/client/components/organisms/modal';
import { useBookmarks } from '@/client/zustand/bookmarks';
import { useContextMenu } from '@/client/zustand/context-menu';
import { Site } from '@/infra/types/site';
import { chromeRemove } from '@/infra/services/chrome';
import { toast } from 'react-toastify';
import { Props } from './types';

export const Delete = ({ isOpen, handleClose }: Props) => {
  const item = useContextMenu((state) => state.item);
  const resetColumns = useBookmarks((state) => state.resetColumns);

  const handleAction = async () => {
    const isFolder = !(item as Site).url;
    if (isFolder) resetColumns(item?.parentId!);
    try {
      await chromeRemove(item?.id!);
      toast('Delete successfully', { type: 'success' });
    } catch (error) {
      toast('Something went wrong', { type: 'error' });
    }
    handleClose();
  };
  if (!item) return null;
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-3xl w-full text-center font-bold">Delete</h1>
      <span className="text-xl">Title:</span>
      <span className="text-peve-dark bg-peve-zinc rounded-md p-2">
        {item?.title}
      </span>
      <section className="flex gap-3 justify-center">
        <Button onClick={handleAction}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </section>
    </Modal>
  );
};
