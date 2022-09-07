import { Line } from '@/app/components/common/line';
import { RootState } from '@/app/reducer';
import { SiteActions } from '@/app/reducer/bookmarks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Props } from './types';

export const FolderUi = ({ folder, index }: Props) => {
  const columns = useSelector((state: RootState) => state.SiteReducer.columns);
  const dispatch = useDispatch();

  const [selected, setselected] = useState(false);

  function folderHandler() {
    dispatch(SiteActions.increment({ id: folder.id, index }));
  }

  useEffect(() => {
    if (columns.findIndex((c) => c.id === folder.id) !== -1) {
      setselected(true);
    } else {
      setselected(false);
    }
  }, [columns]);

  const { title, id } = folder;
  return (
    <Line id={id} title={title} onClick={folderHandler} selected={selected}>
      <span className="h-6 w-6 mr-3">{id !== '2' ? '📁' : '💼'}</span>
    </Line>
  );
};
