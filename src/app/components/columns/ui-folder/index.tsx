import { useBookmarks } from '@/app/zustand/bookmarks';
import { useContextMenu } from '@/app/zustand/context-menu';
import { VITE_SHOW_ID } from '@/domain/constants';
import { useEffect, useState } from 'react';
import { Line } from '../line';
import { Props } from './types';

export const FolderUi = ({ folder, index }: Props) => {
  const [selected, setselected] = useState(false);
  const columns = useBookmarks((state) => state.columns);
  const addColumn = useBookmarks((state) => state.addColumn);

  const { title, id } = folder;
  const itemId = useContextMenu((state) => state.item?.id);

  useEffect(() => {
    const selected = columns.findIndex((c) => c.id === folder.id) !== -1;
    if (selected) return setselected(true);
    return setselected(false);
  }, [columns]);

  return (
    <div>
      <Line
        title={title}
        selected={selected}
        showMenu={itemId === id}
        onClick={() => addColumn(folder, index)}
        item={folder}
      >
        <span className="h-6 w-6 mr-3">{id !== '2' ? '📁' : '💼'}</span>
        {VITE_SHOW_ID && <pre>[{id}]-</pre>}
      </Line>
    </div>
  );
};
