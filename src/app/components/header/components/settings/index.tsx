import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { DownloadJson } from '../download';
import { NewTab } from '../switch-new-tab';

export function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // const settings = [<NewTab />, <Editable />, <DownloadJson />];
  const settings = [<NewTab />, <DownloadJson />];

  const handleClickOutside = (event: MouseEvent) => {
    const target = dropdownRef.current;
    if (target && !target.contains(event.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <AiFillSetting
        size={28}
        className={isOpen ? 'text-peve-selected' : ''}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <AnimatePresence presenceAffectsLayout>
        {isOpen && (
          <div className="absolute z-20 top-10">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ y: [-20, 20, 0], opacity: 1 }}
              exit={{ y: [0, 20, -20], opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-1.5 text-gray-700 p-1.5 bg-peve-light rounded-lg border-2 border-peve-selected w-44"
            >
              {settings.map((item, index) => (
                <div
                  key={index + '@'}
                  className="h-10 hover:brightness-75 p-2 rounded-lg bg-peve-dark text-white flex items-center justify-between text-ellipsis	whitespace-nowrap overflow-hidden"
                >
                  {item}
                </div>
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
