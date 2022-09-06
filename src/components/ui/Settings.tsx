import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { SiBuymeacoffee } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';
import DownloadJson from '../others/DownloadJson';
import Editable from './Editable';
import NewTab from './NewTab';

export function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = dropdownRef.current;
    if (target && !target.contains(event.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  const LiItem = (props: { children: React.ReactNode }) => {
    return (
      <div className="h-10 p-2 rounded-lg bg-peve-dark text-white flex items-center justify-between text-ellipsis	whitespace-nowrap overflow-hidden">
        {props.children}
      </div>
    );
  };

  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };

  // const settings = [<NewTab />, <Editable />, <DownloadJson />];
  const settings = [<NewTab />, <DownloadJson />];

  return (
    <div className="group transition-all duration-300 ease-linear">
      <main className="relative" ref={dropdownRef}>
        <FiSettings
          className={twMerge(
            'text-neutral-200 hover:text-peve-selected cursor-pointer ',
            isOpen && 'text-peve-selected'
          )}
          size={28}
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <AnimatePresence presenceAffectsLayout>
          {isOpen && (
            <div className="absolute z-20 top-10">
              <motion.ul
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [-20, 20, 0], opacity: 1 }}
                variants={exitVariants}
                exit={{ y: [0, 20, -20], opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  'flex flex-col gap-1.5 text-gray-700 p-1.5 bg-peve-light rounded-lg border-2 border-peve-selected w-44'
                }
              >
                {settings.map((c, i) => (
                  <LiItem key={i}>{c}</LiItem>
                ))}
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </main>
      <div className="absolute z-10 left-0 translate-y-2 bg-peve-selected w-auto p-2 m-2 min-w-max rounded-md shadow-md  text-xs font-bold transition-all duration-100 origin-left scale-0 group-hover:scale-100">
        <span>Settings</span>
      </div>
    </div>
  );
}
