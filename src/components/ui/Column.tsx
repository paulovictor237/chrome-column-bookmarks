import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Folder } from '../../types/Folder';
import { Site } from '../../types/Site';
import FolderUi from './FolderUi';
import LinkUi from './LinkUi';

type Props = {
  folder: Folder,
  index: number,
  status?: string
};

export default function Column(props: Props) {
  const { folder, index, status } = props;

  return (
    <motion.div className='w-80 p-2 flex-shrink-0'
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: [-60, 20, 0], opacity: 1 }}
      // exit={{ x: [0, 20, -60], opacity: 0 }}
      // layoutId={`Column${index}`}
      transition={{ duration: 0.3 }}
    >
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg'>
        {status &&
          <div className={`underline bg-opacity-50 select-none flex items-center justify-center p-1 mb-3 overflow-hidden h-10 rounded-md ${folder.children.length > 0 ? 'bg-green-600' : 'bg-red-600'}`}>
            {status}
          </div>
        }
        <div className='flex flex-col gap-3'
        >
          {folder.children?.map((item: Site | Folder) => {
            if ((item as Folder).children === undefined) {
              return (
                <motion.div key={item.id} whileHover={{ scale: 1.03 }}  >
                  <LinkUi key={item.id} link={item as Site} />
                </motion.div>
              )
            } else {
              return (
                <motion.div key={item.id} whileHover={{ scale: 1.03 }}>
                  <FolderUi key={item.id} folder={item as Folder} index={index} />
                </motion.div>
              )
            }
          })}
        </div>
      </div>
    </motion.div>
  )
}
