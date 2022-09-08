import { TreeColumns } from '@/app/components/columns';
import { Header } from '@/app/components/header';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useEffect } from 'react';

export const Home = () => {
  const initBookmark = useBookmarks((state) => state.initBookmark);

  useEffect(() => {
    initBookmark();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col relative">
      <Header />
      <TreeColumns />
    </div>
  );
};
