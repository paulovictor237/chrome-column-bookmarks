import { useBookmarks } from '@/app/zustand/bookmarks';
import { AnimatePresence } from 'framer-motion';
import { Column } from './column';
import { RecentColumn } from './recent';
import { SearchColumn } from './search';

export const TreeColumns = () => {
  const columns = useBookmarks((state) => state.columns);

  return (
    <div className=" overflow-x-auto w-full flex sc2 p-1 h-full">
      <AnimatePresence presenceAffectsLayout>
        <SearchColumn key={-1} />
        <RecentColumn key={-2} />
        {columns.map((folder, index) => (
          <Column
            key={folder.id + String(index) + '[]'}
            folder={folder}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
