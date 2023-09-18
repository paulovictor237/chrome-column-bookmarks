import { ContextMenu } from '@/client/components/organisms/context-menu';
import { ColumnsControllerDND } from '@/client/components/templates/columns-controler-dnd';
import { Header } from '@/client/components/templates/header';
import { useBookmarks } from '@/client/zustand/bookmarks';
import { useMenuOptions } from '@/client/zustand/options';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
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
