import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import FolderBooks from './FolderBooks';
import LineLink from './LineLink';

export default function Column({ folder }: any) {

  return (
    <div className='w-96 p-2'>
      <div className='bg-dark700 rounded-2xl p-3 h-full overflow-y-auto sc2'>
        <div className='flex flex-col gap-3'>
          {folder.children?.map((item: any) => {
            if (item.children === undefined) {
              return <LineLink key={item.id} url={item.url} title={item.title} />
            } else {
              return <FolderBooks key={item.id} url={item.url} title={item.title} />
            }
          })}
        </div>
      </div>
    </div>
  )
}
