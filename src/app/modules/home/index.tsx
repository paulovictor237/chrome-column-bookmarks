import { TreeColumns } from '@/app/components/columns';
import { Header } from '@/app/components/header';
import { SiteActions } from '@/app/reducer/bookmarks';
import { optionsActions } from '@/app/reducer/options';
import { getBookmarks } from '@/infra/services/getBookmarks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await getBookmarks();
      dispatch(SiteActions.initBookmark(data));
    }
    getData();
    dispatch(optionsActions.getLocalStorage());
  }, [dispatch]);

  return (
    <div className="h-screen w-screen flex flex-col relative">
      <Header />
      <TreeColumns />
    </div>
  );
};
