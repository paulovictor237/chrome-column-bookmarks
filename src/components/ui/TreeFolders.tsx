import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Bookmark } from '../../types/Bookmark'
import { BookmarkTree } from '../../types/BookmarkTree'
import { Folder } from '../../types/Folder'
import Column from './Column'


export default function TreeFolders() {

  const url = 'https://www.youtube.com/watch?v=D7eFpRf4tac'
  const title = 'asd'

  const [folder, setFolder] = useState<any>([] as any)

  const booksmarkroot = useSelector((state: RootState) => state.booksReducer.booksmark);

  useEffect(() => {
    if (booksmarkroot.length > 0) {
      const [booksmarks, otherBooksmarks] = booksmarkroot[0]?.children || [];
      // const asd = JSON.stringify(booksmarks);
      setFolder(booksmarks)
    }
  }, [booksmarkroot])

  return (
    <div className=' heightColumn overflow-x-auto w-screen bottom-0 fixed flex sc2 p-1'>
      <Column folder={folder} />
      <Column folder={folder} />
      <Column folder={folder} />
    </div>
  )
}
