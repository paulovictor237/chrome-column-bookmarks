import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { AnimatePresence } from 'framer-motion';
import { Column } from './column';

export const TreeColumns = () => {
  const columns = useBookmarks((state) => state.columns);
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchBar = useMenuOptions((state) => state.searchBar);

  return (
    <div className=" overflow-x-auto w-full flex sc2 p-1 h-full">
      <AnimatePresence presenceAffectsLayout>
        {searchBar && (
          <Column
            key={-500}
            folder={searchFolder}
            index={-1}
            status={searchFolder.children.length > 0 ? 'search' : 'no results'}
          />
        )}
        {columns.map((column, index) => (
          <Column key={column.id} folder={column} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
