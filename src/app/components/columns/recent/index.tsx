import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { Folder } from '@/domain/entities/folder';
import { chromeRecent } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';
import { Column } from '../column';

export const RecentColumn = () => {
  const showRecent = useMenuOptions((state) => state.showRecent);
  const initRecent: Folder = {
    children: [],
    dateAdded: 0,
    dateGroupModified: 0,
    parentId: '0',
    id: 'recent',
    index: -2,
    title: 'Recent',
  };
  const [recentFolder, setRecentFolder] = useState<Folder>(initRecent);

  const getRecent = async () => {
    const children = await chromeRecent(50);
    setRecentFolder({ ...initRecent, children });
  };

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <>
      {showRecent && (
        <Column
          showTitle
          folder={recentFolder}
          index={-1}
          title={'Recent'}
          // status={searchResults ? 'search' : 'no results'}
          // className={searchResults ? 'bg-green-600' : 'bg-red-600'}
        />
      )}
    </>
  );
};
