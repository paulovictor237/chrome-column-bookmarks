import { Button } from '@/app/components/buttom';
import Modal from '@/app/components/modal';
import { useContextMenu } from '@/app/zustand/context-menu';
import { Site } from '@/domain/entities/site';
import { chromeUpdate } from '@/infra/services/chrome';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledForm } from '../../controlled-form';
import { ControlledInput } from '../../controlled-input';
import { Props } from './types';

export const Update = ({ isOpen, handleClose }: Props) => {
  const formMethods = useForm<{ title: string; url: string }>();
  const item = useContextMenu((state) => state.item);
  const { setFocus, setValue, watch, reset, handleSubmit } = formMethods;
  const onBlur = () => setValue('title', watch('title').trim());
  const url = item && (item as Site).url;

  const onSubmit = handleSubmit(async (submittedData) => {
    if (submittedData.title === '') return setFocus('title');
    const sameName = item?.title === submittedData.title;
    const sameUrl = url === submittedData.url;
    if (!(sameName && sameUrl)) chromeUpdate(item!.id, submittedData);
    handleClose();
  });

  useEffect(() => {
    reset();
    item && setValue('title', item.title);
    url && setValue('url', url);
  }, [item]);

  if (!item) return null;
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1 className="text-3xl w-full text-center">Update</h1>
      <ControlledForm
        formMethods={formMethods}
        onSubmit={onSubmit}
        className="flex flex-col gap-3"
      >
        <ControlledInput
          name="title"
          label="title"
          placeholder="Google"
          registerOptions={{ onBlur }}
          autoFocus
        />
        {url && (
          <ControlledInput
            name="url"
            label="url"
            placeholder="https://www.google.com"
          />
        )}
        <section className="flex gap-3 justify-center ">
          <Button type="submit">Confirm</Button>
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
        </section>
      </ControlledForm>
    </Modal>
  );
};
