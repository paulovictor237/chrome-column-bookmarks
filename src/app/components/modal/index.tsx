import { useEffect, useRef } from 'react';
import ReactPortal from './assets/react-portal';
import { Props } from './types';

function Modal({ children, isOpen, handleClose }: Props) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <section
        className="fixed inset-0 bg-zinc-500 bg-opacity-30"
        onClick={handleClose}
      />
      <main className="text-3xl p-8 rounded-md bg-zinc-900 flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </main>
    </ReactPortal>
  );
}
export default Modal;
