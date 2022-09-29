import Modal from '@/app/components/modal';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { chromeCreate, chromeGet } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/buttom';
import { Props } from './types';

export const Create = ({ id, isOpen, handleClose }: Props) => {
  const [item, setItem] = useState<Site | Folder>({
    id: '',
    title: 'Loading...',
  });
  const handleAction = async () => {
    chromeCreate({});
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
      <h1 className="text-3xl">Are you sure?</h1>
      <span>Delete: {item.title}</span>
      <section className="flex gap-3 justify-center ">
        <Button onClick={handleAction}>Confirm</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </section>
    </Modal>
  );
};
