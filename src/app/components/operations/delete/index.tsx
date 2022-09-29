import { Button } from '@/app/components/buttom';
import Modal from '@/app/components/modal';
import { useContextMenu } from '@/app/zustand/context-menu';
import { chromeRemove } from '@/infra/services/chrome';
import { Props } from './types';

export const Delete = ({ isOpen, handleClose }: Props) => {
  const item = useContextMenu((state) => state.item);
  if (!item) return null;
  const handleAction = async () => {
    chromeRemove(item.id);
    handleClose();
  };
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-3xl w-full text-center">Delete</h1>
      <span>Name: {item?.title}</span>
      <section className="flex gap-3 justify-center ">
        <Button onClick={handleAction}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </section>
    </Modal>
  );
};
