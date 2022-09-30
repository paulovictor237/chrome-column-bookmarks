import { Button } from '@/app/components/buttom';
import Modal from '@/app/components/modal';
import { useContextMenu } from '@/app/zustand/context-menu';
import { chromeRemove } from '@/infra/services/chrome';
import { Props } from './types';

export const Delete = ({ isOpen, handleClose }: Props) => {
  const item = useContextMenu((state) => state.item);
  const handleAction = async () => {
    item && chromeRemove(item.id);
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
