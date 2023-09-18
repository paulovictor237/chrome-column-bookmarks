import { DragDropColumn } from '@/client/components/templates/columns-controler-dnd/components/column';
import { useMenuOptions } from '@/client/zustand/options';
import { ColumnType } from '@/infra/types/column';
import { chromeRecent } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';

export const RecentColumn = () => {
  const showRecent = useMenuOptions((state) => state.showRecent);
  const initRecent: ColumnType = { id: '-2', title: 'Recent', children: [] };
  const [recentFolder, setRecentFolder] = useState<ColumnType>(initRecent);

  const getRecent = async () => {
    const children = await chromeRecent(20);
    setRecentFolder({ ...initRecent, children });
  };

  useEffect(() => {
    getRecent();
  }, []);

  if (!showRecent) return null;
  return (
    <DragDropColumn
      columnIndex={-1}
      column={recentFolder}
      title={'Recent'}
      prefixId="recent"
      isDropDisabled
      classNameTitle="bg-green-700"
    />
  );
};
