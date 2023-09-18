import { useMenuOptions } from '@/client/zustand/options';
import { useEffect } from 'react';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

export const LockEdit = () => {
  const toggle = useMenuOptions((state) => state.toggleLockedEdition);
  const locked = useMenuOptions((state) => state.lockedEdition);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.altKey && event.keyCode === 76) toggle();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <button
      className={twMerge(
        'text-peve-zinc flex items-center justify-center hover:text-peve-selected',
        !locked && 'text-warcraft-red'
      )}
      onClick={toggle}
    >
      {locked && <HiLockClosed size={28} />}
      {!locked && <HiLockOpen size={28} />}
    </button>
  );
};
