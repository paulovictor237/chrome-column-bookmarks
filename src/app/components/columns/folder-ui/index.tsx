import { Line } from '@/app/components/common/line';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useEffect, useState } from 'react';
import { Props } from './types';

export const FolderUi = ({ folder, index }: Props) => {
  const [selected, setselected] = useState(false);
  const columns = useBookmarks((state) => state.columns);
  const increment = useBookmarks((state) => state.increment);

  useEffect(() => {
    if (columns.findIndex((c) => c.id === folder.id) !== -1) {
      setselected(true);
    } else {
      setselected(false);
    }
  }, [columns]);

  const { title, id } = folder;
  return (
    <Line
      id={id}
      title={title}
      onClick={() => increment(folder.id, index)}
      selected={selected}
    >
      <span className="h-6 w-6 mr-3">{id !== '2' ? '📁' : '💼'}</span>
    </Line>
  );
};
