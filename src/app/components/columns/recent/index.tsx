import { useMenuOptions } from '@/app/zustand/options';
import { ColumnType } from '@/domain/entities/column';
import { chromeRecent } from '@/infra/services/chrome';
import { useEffect, useState } from 'react';
import { Column } from '../column';
import { ColumnItem } from '../items';

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

  return (
    <>
      {showRecent && (
        <Column title={'Recent'} showTitle>
          {recentFolder.children?.map((item, columnIndex) => (
            <ColumnItem
              key={item.id + 'ColumnItem'}
              item={item}
              columnIndex={columnIndex}
            />
          ))}
        </Column>
      )}
    </>
  );
};
