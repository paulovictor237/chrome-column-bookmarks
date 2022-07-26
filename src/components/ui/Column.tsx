import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import LineLink from './LineLink';

export default function Column() {
  const url = 'https://www.youtube.com/watch?v=D7eFpRf4tac'
  const title = 'asd'

  const [folder, setFolder] = useState<any>([] as any)

  const booksmarkroot = useSelector((state: RootState) => state.booksReducer.booksmark);

  useEffect(() => {
    if (booksmarkroot.length > 0) {
      const [{ children: booksmarks }, { children: otherBooksmarks }] = booksmarkroot[0]?.children || [];
      // const asd = JSON.stringify(booksmarks);
      setFolder([booksmarks![0], booksmarks![1]])
    }
  }, [booksmarkroot])

  return (
    <div className='w-1/3 p-4 pr-2'>
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2'>
        <div className='flex flex-col gap-3'>
          {folder.map((item: any) => {
            return <LineLink key={item.id} url={item.url} title={item.title} />
          })}
          <LineLink url={url} title={title} />
          <LineLink url={url} title="Creating a Chrome extension with React and TypeScript - LogRocket Blog" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim" />
          <LineLink url={url} title="fim2" />
        </div>
      </div>
    </div>
  )
}
