import { motion } from 'framer-motion';
import DownloadJson from '../components/others/DownloadJson';
import Dropdowns from '../components/ui/Dropdowns';
import LockEdit from '../components/ui/LockEdit';
import NewTab from '../components/ui/NewTab';

export default function Header() {
  return (
    <motion.div className='bg-dark700 p-5 flex items-center justify-between w-full heightHeader shadow-lg'
    // transition={{ duration: 0.4 }}
    // initial={{ opacity: 0, scaleY: 0.7 }}
    // animate={{ opacity: 1, scaleY: 1 }}
    >
      <div className='flex gap-2'>
        <DownloadJson />
        <NewTab />
        {/* <LockEdit /> */}
      </div>
      <Dropdowns />
      <span className=' inline-flex items-center select-none text-blue-700 border border-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'>
        Version: Beta
      </span>
    </motion.div>
  )
}
