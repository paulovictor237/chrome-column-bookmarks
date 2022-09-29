import Modal from '@/app/components/modal';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { chromeGet, chromeRemove } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/buttom';
import { Props } from './types';

export const Delete = ({ id, isOpen, handleClose }: Props) => {
  const [item, setItem] = useState<Site | Folder>({
    id: '',
    title: 'Loading...',
  });
  const handleAction = async () => {
    chromeRemove(id);
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
      <h1 className="text-3xl w-full text-center">Delete</h1>
      <span>Name: {item.title}</span>
      <section className="flex gap-3 justify-center ">
        <Button onClick={handleAction}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </section>
    </Modal>
  );
};
