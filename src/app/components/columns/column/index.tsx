import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { motion } from 'framer-motion';
import { TbDots } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Line } from '../../common/line';
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
      <div className="bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg">
        {showTitle && (
          <title
            className={twMerge(
              ' border-peve-dark text-peve-dark bg-peve-selected font-bold select-none flex items-center justify-center mb-3 overflow-hidden h-10 rounded-md ',
              className
            )}
          >
            {folder.title}
          </title>
        )}
        <main className="flex flex-col gap-3">
          {folder.children.length < 1 && (
            <Line className="justify-center font-bold text-2xl" disabled>
              <TbDots />
            </Line>
          )}
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
