import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import LineLink from './LineLink';

export default function Column() {
  const url = 'https://www.youtube.com/watch?v=D7eFpRf4tac'
  const title = 'asd'

  const [folder, setFolder] = useState<any>([] as any)

  const booksmarkroot = useSelector((state: RootState) => state.booksReducer.booksmark);
  if (booksmarkroot.length > 0) {
    const [{ children: booksmarks }, { children: otherBooksmarks }] = booksmarkroot[0]?.children || [];
    const asd = JSON.stringify(booksmarks);
    console.log(asd[0])
    // setFolder([...folder, booksmarks![0]])

  }

  return (
    <div className='w-1/4 bg-stone-700 border-x-2 border-pink-700 heightColumn'>
      <div className=' overflow-y-auto h-full'>
        <LineLink url={url} title={title} />
        <LineLink url={url} title="fim" />
      </div>
    </div>
  )
}
