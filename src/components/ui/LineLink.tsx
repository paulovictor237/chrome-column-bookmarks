import React from 'react';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type props = {
  url: string,
  title: string
}

export default function LineLink({ url, title }: props) {
  const faviconSrc = url && getFaviconUrl(url);
  return (
    <div className='p-1 px-3 hover:bg-sky-500 overflow-hidden h-auto'>
      <a
        className="flex items-center  justify-start"
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
            className='h-6 w-6 min-w-6 mr-3'
            src={faviconSrc}
            alt="description"
          />
        }
        <span>{title}</span>
      </a>
    </div>
  )
}
