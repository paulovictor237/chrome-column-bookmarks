import { Button } from '@/app/components/buttom';
import Modal from '@/app/components/modal';
import { useContextMenu } from '@/app/zustand/context-menu';
import { chromeCreate } from '@/infra/services/chrome';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledForm } from '../../controlled-form';
import { ControlledInput } from '../../controlled-input';
import { Props } from './types';

export const Create = ({ isOpen, handleClose }: Props) => {
  const formMethods = useForm<{ title: string; url: string }>();
  const item = useContextMenu((state) => state.item);
  const { setFocus, setValue, watch, reset, handleSubmit } = formMethods;
  const onBlur = () => setValue('title', watch('title').trim());

  const onSubmit = handleSubmit(async (submittedData) => {
    if (submittedData.title === '') return setFocus('title');
    const submitCreate = {
      index: 0,
      parentId: item?.id,
      title: submittedData.title,
      url: submittedData.url,
    };
    chromeCreate(submitCreate);
    handleClose();
  });

  useEffect(() => {
    reset();
  }, [item]);

  if (!item) return null;
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ControlledForm
        formMethods={formMethods}
        onSubmit={onSubmit}
        className="flex flex-col gap-3"
      >
        <h1 className="text-3xl w-full text-center font-bold">Create</h1>
        <ControlledInput
          name="title"
          label="Title:"
          placeholder="Google"
          registerOptions={{ onBlur }}
          autoFocus
        />
        <ControlledInput
          name="url"
          label="Url:"
          placeholder="Keep blank to create a folder"
        />
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
