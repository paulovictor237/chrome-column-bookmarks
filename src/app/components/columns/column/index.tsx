import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { motion } from 'framer-motion';
import { FolderUi } from '../folder-ui';
import { LinkUi } from '../link-ui';
import { Props } from './types';

export const Column = (props: Props) => {
  const { folder, index, status } = props;

  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };

  return (
    <motion.div
      className="md:w-80 w-full p-2 flex-shrink-0"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: [-60, 20, 0], opacity: 1 }}
      variants={exitVariants}
      exit={index === -1 ? 'visible' : 'hidden'}
      // layoutId={`Column${index}`}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg">
        {status && (
          <title
            className={`underline bg-opacity-50 select-none flex items-center justify-center p-1 mb-3 overflow-hidden h-10 rounded-md ${
              folder.children.length > 0 ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {status}
          </title>
        )}
        <main className="flex flex-col gap-3">
          {folder.children?.map((item) => {
            const isFolder = !!(item as Folder).children;
            return (
              <motion.div key={item.id} whileHover={{ scale: 1.03 }}>
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
