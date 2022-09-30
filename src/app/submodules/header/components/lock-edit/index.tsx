import { useMenuOptions } from '@/app/zustand/options';
import { useState } from 'react';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi';

export const LockEdit = () => {
  const toggle = useMenuOptions((state) => state.toggleLockedEdition);
  const locked = useMenuOptions((state) => state.lockedEdition);
  const selected = !locked ? 'text-warcraft-red' : '';
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
