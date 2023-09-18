import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';
import { ReactPortal } from '../react-portal';

const Modal = ({ children, className, isOpen, handleClose }: Props) => {
  const closeOnEscapeKey = (e: KeyboardEvent) => {
    e.key === 'Escape' && handleClose();
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKey);
  }, []);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <section
        className="fixed inset-0 bg-peve-zinc bg-opacity-30"
        onClick={handleClose}
      />
      <main className="fixed p-8 rounded-md bg-peve-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <section
          className={twMerge(
            'flex flex-col gap-3 justify-center min-w-[17rem]',
            className
          )}
        >
          {children}
        </section>
      </main>
    </ReactPortal>
  );
};
export default Modal;
