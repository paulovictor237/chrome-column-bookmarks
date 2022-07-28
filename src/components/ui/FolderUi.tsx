import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SiteActions } from '../../store/booksmarkReducer';
import { Folder } from '../../types/Folder';

type Props = {
  folder: Folder,
  index: number
}

export default function FolderUi({ folder, index }: Props) {
  const columns = useSelector((state: RootState) => state.siteReducer.columns);
  const dispatch = useDispatch();

  const [selected, setselected] = useState(false)

  function folderHandler() {
    dispatch(SiteActions.increment({ id: folder.id, index }));
  }

  useEffect(() => {
    if (columns.findIndex(c => c.id === folder.id) !== -1) {
      setselected(true)
    } else {
      setselected(false)
    }
  }, [columns])



  const { title, id } = folder;
  return (
    <div
      className={`p-1 px-3 hover:bg-blue-suave filter:brightness-105 overflow-hidden h-10 flex items-center justify-start rounded-md cursor-pointer 
      ${selected ? 'bg-zinc-600' : 'bg-dark800'}`}
      onClick={folderHandler}
    >
      <span className='h-6 w-6 mr-3'>
        {(id !== "2") ? '📁' : '💼'}
      </span>
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'>
        {title}
      </span>
    </div >
  )
}
