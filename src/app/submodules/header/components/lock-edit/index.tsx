import { useMenuOptions } from '@/app/zustand/options';
import { useEffect, useState } from 'react';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi';

export const LockEdit = () => {
  const toggle = useMenuOptions((state) => state.toggleLockedEdition);
  const locked = useMenuOptions((state) => state.lockedEdition);
  const selected = !locked ? 'text-warcraft-red' : '';

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.altKey && event.keyCode === 76) toggle();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <button
      className="text-peve-zinc flex items-center justify-center"
      onClick={toggle}
    >
      {locked && <HiLockClosed className={selected} size={28} />}
      {!locked && <HiLockOpen className={selected} size={28} />}
    </button>
  );
};
