import { useBookmarks } from '@/app/zustand/bookmarks';
import { AnimatePresence } from 'framer-motion';
import { Column } from './column';
import { SearchColumn } from './search';

export const TreeColumns = () => {
  const columns = useBookmarks((state) => state.columns);

  return (
    <div className=" overflow-x-auto w-full flex sc2 p-1 h-full">
      <AnimatePresence presenceAffectsLayout>
        <SearchColumn />
        {columns.map((folder, index) => (
          <Column key={folder.id} folder={folder} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
