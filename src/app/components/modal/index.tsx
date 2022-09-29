import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import ReactPortal from '../tools/react-portal';
import { Props } from './types';

const Modal = ({ children, className, isOpen, handleClose }: Props) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, []);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <section
        className="fixed inset-0 bg-zinc-500 bg-opacity-30"
        onClick={handleClose}
      />
      <main className="fixed p-8 rounded-md bg-peve-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <section
          className={twMerge('flex flex-col gap-3 justify-center', className)}
        >
          {children}
        </section>
      </main>
    </ReactPortal>
  );
};
export default Modal;
