import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FolderUi } from '../folder-ui';
import { LinkUi } from '../link-ui';
import { Props } from './types';

export const Column = ({
  folder,
  index,
  title,
  showTitle = false,
  className,
}: Props) => {
  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };

  return (
    <motion.div
      className="md:w-80 w-full p-2 flex-shrink-0 flex flex-col"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: [-60, 20, 0], opacity: 1 }}
      variants={exitVariants}
      exit={index === -1 ? 'visible' : 'hidden'}
      // layoutId={`Column${index}`}
      transition={{ duration: 0.3 }}
    >
      {showTitle && (
        <title
          className={twMerge(
            'select-none flex items-center justify-center p-1 mb-3 overflow-hidden h-10 rounded-md bg-peve-zinc',
            className,
            'hidden'
          )}
        >
          {folder.title}
        </title>
      )}
      <div className="bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg">
        {showTitle && (
          <title
            className={twMerge(
              'shadow-2xl border-2 border-peve-white bg-peve-selected font-bold select-none flex items-center justify-center mb-3 overflow-hidden h-10 rounded-md ',
              className
            )}
          >
            {folder.title}
          </title>
        )}
        <main className="flex flex-col gap-3">
          {folder.children?.map((item, idx) => {
            const isFolder = !!(item as Folder).children;
            return (
              <motion.div
                key={folder.id + item.id + String(idx)}
                whileHover={{ scale: 1.03 }}
              >
                {!isFolder && <LinkUi link={item as Site} />}
                {isFolder && <FolderUi folder={item as Folder} index={index} />}
              </motion.div>
            );
          })}
        </main>
      </div>
    </motion.div>
  );
};
