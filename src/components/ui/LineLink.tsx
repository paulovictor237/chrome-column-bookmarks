import React from 'react';
import { Bookmark } from '../../types/Bookmark';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type Props = {
  link: Bookmark
}

export default function LineLink({ link }: Props) {
  const { url, title } = link;
  const faviconSrc = url && getFaviconUrl(url);
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
        url &&
        <img
          className='h-6 w-6 mr-3'
          src={faviconSrc}
          alt="[ favicon ]"
        />
      }
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'
      >
        {title}
      </span>
    </a>
  )
}
