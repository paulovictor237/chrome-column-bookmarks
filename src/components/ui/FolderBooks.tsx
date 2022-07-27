import React from 'react';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type props = {
  url: string,
  title: string
}

export default function FolderBooks({ url, title }: props) {
  return (
    <a className='p-1 px-3 hover:bg-blue-suave filter:brightness-105 overflow-hidden h-10 flex items-center justify-start bg-dark800 rounded-md'
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false} // Disables the browser built-in drag handler
    // isHoverDisabled={isHoverDisabled}
    // isTransitionDisabled={isTransitionDisabled}
    >
      {
        <span className='h-6 w-6 mr-3'>
          📁
        </span>
      }
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'
      >
        {title}
      </span>
    </a>
  )
}
