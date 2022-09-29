import Modal from '@/app/components/modal';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { chromeGet, chromeUpdate } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/buttom';
import { Props } from './types';
import { Input } from '../../input';

export const Update = ({ id, isOpen, handleClose }: Props) => {
  const [item, setItem] = useState<Site | Folder>({
    id: '',
    title: 'Loading...',
  });
  const handleAction = async () => {
    // chromeUpdate(id, { title, url });
    handleClose();
  };
  const getItem = async () => {
    const dataItem = await chromeGet(id);
    dataItem && setItem(dataItem);
  };
  useEffect(() => {
    getItem();
  }, []);
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
