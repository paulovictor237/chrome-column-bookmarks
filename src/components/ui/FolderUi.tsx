import React from 'react';
import { useDispatch } from 'react-redux';
import { SiteActions } from '../../store/booksmarkReducer';
import { Folder } from '../../types/Folder';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type Props = {
  folder: Folder,
  index: number
}

export default function FolderUi({ folder, index }: Props) {
  const dispatch = useDispatch();

  function folderHandler() {
    dispatch(SiteActions.increment({ id: folder.id, index }));
  }

  const { title, id } = folder;
  return (
    <div
      className='p-1 px-3 hover:bg-blue-suave filter:brightness-105 overflow-hidden h-10 flex items-center justify-start bg-dark800 rounded-md cursor-pointer'
      onClick={folderHandler}
    >
      <span className='h-6 w-6 mr-3'>
        {(id !== "2") ? '📁' : '💼'}
      </span>
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'>
        {title}
      </span>
    </div>
  )
}
