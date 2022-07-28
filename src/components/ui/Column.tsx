import { motion, useMotionValue, useTransform } from "framer-motion";
import { Children } from "react";
import { Folder } from '../../types/Folder';
import { Site } from '../../types/Site';
import FolderUi from './FolderUi';
import LinkUi from './LinkUi';

type Props = {
  folder: Folder,
  index: number
};

export default function Column(props: Props) {
  const { folder, index } = props;

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  return (
    <motion.div className='w-80 p-2 flex-shrink-0'
      // layoutId="Column"
      // whileInView={{ opacity: 1 }}
      // exit={{ opacity: 0, scale: 0.5 }}

      // transition={{ duration: 0.26 }}
      // initial={{ opacity: 0, scaleY: 0.7 }}
      // animate={{ opacity: 1, scaleY: 1 }}
      // whileHover={{ scale: 1.03 }}

      // initial={{ x: "-100%" }}
      // animate={{ x: "0%" }}
      // transition={{ type: "spring", stiffness: 150 }}

      // initial={{ x: "calc(100vw - 50%)" }}
      // initial={{ x: "-100%" }}
      // animate={{ x: "0%" }}

      // animate={{ x: [200, 100, 0] }}
      // transition={{ duration: 1, times: [0, 0.1, 1] }}

      animate={{ x: [-60, 20, 0] }}
      transition={{ duration: 0.3 }}
    >
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg'>
        <div className='flex flex-col gap-3'
        >
          {folder.children?.map((item: Site | Folder) => {
            if ((item as Folder).children === undefined) {
              return (
                <motion.div whileHover={{ scale: 1.03 }}  >
                  <LinkUi key={item.id} link={item as Site} />
                </motion.div>
              )
            } else {
              return (
                <motion.div whileHover={{ scale: 1.03 }}>
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
