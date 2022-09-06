import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Modal from 'react-modal';
import { twMerge } from 'tailwind-merge';

type Props = {};

export const Delete = (props: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const customStyles = {
    overlay: {
      background: '#1f20279f',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#198cf0',
    },
  };

  const button = 'h-10 rounded-md p-2 w-full';

  return (
    <>
      <FiTrash2
        className="text-neutral-200 hover:text-red-500 cursor-pointer"
        size={28}
        onClick={openModal}
      />
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex flex-col gap-3 justify-center w-52">
            Are you sure?
            <div className="flex gap-3 justify-center ">
              <button
                className={twMerge(button, 'bg-green-500 hover:bg-green-600')}
                onClick={closeModal}
              >
                Confirm
              </button>
              <button
                className={twMerge(button, 'bg-red-500 hover:bg-red-600')}
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
