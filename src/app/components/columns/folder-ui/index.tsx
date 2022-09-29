import { Line } from '@/app/components/common/line';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useContextMenu } from '@/app/zustand/context-menu';
import { useEffect, useState } from 'react';
import { Props } from './types';

export const FolderUi = ({ folder, index }: Props) => {
  const [selected, setselected] = useState(false);
  const columns = useBookmarks((state) => state.columns);
  const addColumn = useBookmarks((state) => state.addColumn);

  const { title, id } = folder;
  const itemId = useContextMenu((state) => state.item?.id);
  const onContextMenu = useContextMenu((state) => state.onContextMenu);

  useEffect(() => {
    const selected = columns.findIndex((c) => c.id === folder.id) !== -1;
    if (selected) return setselected(true);
    return setselected(false);
  }, [columns]);

  return (
    <div onContextMenu={(e) => onContextMenu(e, folder)}>
      <Line
        title={title}
        onClick={() => addColumn(folder, index)}
        selected={selected}
        showMenu={itemId === id}
      >
        <span className="h-6 w-6 mr-3">{id !== '2' ? '📁' : '💼'}</span>
      </Line>
    </div>
  );
};
