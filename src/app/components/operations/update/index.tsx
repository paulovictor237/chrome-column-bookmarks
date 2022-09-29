import { Button } from '@/app/components/buttom';
import Modal from '@/app/components/modal';
import { useContextMenu } from '@/app/zustand/context-menu';
import { Site } from '@/domain/entities/site';
import { Input } from '../../input';
import { Props } from './types';

export const Update = ({ isOpen, handleClose }: Props) => {
  const item = useContextMenu((state) => state.item);
  if (!item) return null;
  const handleAction = async () => {
    // chromeUpdate(id, { title, url });
    handleClose();
  };
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-3xl w-full text-center">Update</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleAction();
        }}
      >
        <Input label="Title" id="title" type="text" value={item.title} />
        {/* TODO: remover parametro se n existir URL */}
        <Input label="URL" id="title" type="text" value={(item as Site).url} />
        <section className="flex gap-3 justify-center ">
          <Button type="submit">Confirm</Button>
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
        </section>
      </form>
    </Modal>
  );
};
