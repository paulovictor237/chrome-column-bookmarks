import { ColumnsControllerDND } from '@/app/submodules/columns-controler-dnd';
import { ColumnsController } from '@/app/submodules/columns-controller';
import { Header } from '@/app/submodules/header';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { useEffect } from 'react';

export const Home = () => {
  const initBookmark = useBookmarks((state) => state.initialState);
  const initOptions = useMenuOptions((state) => state.initOptions);
  const locked = useMenuOptions((state) => state.lockedEdition);

  useEffect(() => {
    initBookmark();
    initOptions();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col relative">
      <Header />
      {locked && <ColumnsController />}
      {!locked && <ColumnsControllerDND />}
    </div>
  );
};
