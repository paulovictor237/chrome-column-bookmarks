import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { useEffect, useRef } from 'react';
import { Column } from './column';
import { RecentColumn } from './recent';
import { SearchColumn } from './search';

export const TreeColumns = () => {
  const columns = useBookmarks((state) => state.columns);
  const searchKeywords = useBookmarks((state) => state.searchKeywords);
  const showRecent = useMenuOptions((state) => state.showRecent);

  const ref = useRef<HTMLDivElement>(null);

  const buttonHandler = () => {
    if (!ref.current) return;
    if (searchKeywords || showRecent) return (ref.current.scrollLeft = 0);

    const { offsetLeft, scrollWidth } = ref.current;
    const end = offsetLeft + scrollWidth;
    ref.current.scrollLeft = end;
  };

  useEffect(() => {
    buttonHandler();
  }, [searchKeywords, showRecent, columns]);

  return (
    <div
      ref={ref}
      className=" overflow-x-auto scroll-smooth w-full flex sc2 p-1 h-full"
    >
      <SearchColumn key={-1} />
      <RecentColumn key={-2} />
      {columns.map((column, index) => (
        <Column key={column.id + index + '[]'} column={column} index={index} />
      ))}
    </div>
  );
};
