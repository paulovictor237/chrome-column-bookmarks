import { ContextMenu } from '@/app/components/context-menu';
import { ColumnsControllerDND } from '@/app/submodules/columns-controler-dnd';
import { Header } from '@/app/submodules/header';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const initBookmark = useBookmarks((state) => state.initialState);
  const initOptions = useMenuOptions((state) => state.initOptions);

  useEffect(() => {
    initBookmark();
    initOptions();
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col relative">
      <ToastContainer theme="dark" autoClose={2_000} />
      <ContextMenu />
      <Header />
      <ColumnsControllerDND />
    </div>
  );
};
