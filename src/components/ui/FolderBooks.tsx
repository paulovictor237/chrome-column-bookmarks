import React from 'react';
import { Folder } from '../../types/Folder';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type Props = {
  folder: Folder
}

export default function FolderBooks({ folder }: Props) {

  function folderHandler() {
    console.log(folder.id);
  }

  const { title } = folder;
  return (
    <div
      className='p-1 px-3 hover:bg-blue-suave filter:brightness-105 overflow-hidden h-10 flex items-center justify-start bg-dark800 rounded-md cursor-pointer'
      onClick={folderHandler}
    >
      <span className='h-6 w-6 mr-3'>
        📁
      </span>
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'>
        {title}
      </span>
    </div>
  )
}
