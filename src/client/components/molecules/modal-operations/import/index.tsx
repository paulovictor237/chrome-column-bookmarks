import { Button } from '@/client/components/atoms/buttom';
import Modal from '@/client/components/organisms/modal';
import { useContextMenu } from '@/client/zustand/context-menu';
import { BookmarkTreeNode } from '@/infra/entities/chrome';
import { createRecursive } from '@/infra/services/create-recursive';
import { fileToJson } from '@/infra/services/files';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Props } from './types';
import { ControlledForm } from '@/client/components/molecules/controlled-form';
import { ControlledUpload } from '@/client/components/molecules/controlled-upload';
import {
  FileType,
  fileResolver,
} from '@/client/components/molecules/controlled-upload/validation';

export const Import = ({ isOpen, handleClose }: Props) => {
  const formMethods = useForm<FileType>({
    resolver: fileResolver,
  });
  const item = useContextMenu((state) => state.item);
  const { reset, handleSubmit } = formMethods;

  const onSubmit = handleSubmit(async (submittedData) => {
    handleClose();
    const asyncUpload = async () => {
      const data = await fileToJson(submittedData.file[0]);
      await createRecursive({
        item: data as BookmarkTreeNode,
        id: item?.id as string,
      });
    };
    toast.promise(asyncUpload, {
      pending: 'Import is pending',
      success: 'Import successfully',
      error: 'Something went wrong',
    });
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
        <h1 className="text-3xl w-full text-center font-bold">Import</h1>
        <span className="text-xl">Import inside folder:</span>
        <span className="text-peve-dark bg-peve-zinc rounded-md p-2">
          {item?.title}
        </span>
        <ControlledUpload
          name="file"
          label="Attach json file:"
          placeholder="bookmarks.json"
          type="file"
          multiple={false}
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
