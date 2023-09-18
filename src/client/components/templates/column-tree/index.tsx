import { useBookmarks } from '@/client/zustand/bookmarks';
import { useMenuOptions } from '@/client/zustand/options';
import { useEffect, useRef } from 'react';
import { Props } from './types';

export const ColumnTree = ({ children }: Props) => {
  const columnsLength = useBookmarks((state) => state.columns.length);
  const lastId = useBookmarks((state) => state.columns[columnsLength - 1]?.id);
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
  }, [searchKeywords, showRecent, columnsLength, lastId]);

  return (
    <div
      ref={ref}
      className=" overflow-x-auto scroll-smooth w-full flex sc2 p-1 h-full"
    >
      {children}
    </div>
  );
};
