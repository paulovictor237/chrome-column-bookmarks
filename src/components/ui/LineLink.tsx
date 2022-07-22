import React from 'react';
import { getFaviconUrl } from "../../utils/getFaviconUrl";

type props = {
  url: string
}

export default function LineLink({ url }: props) {
  const faviconSrc = url && getFaviconUrl(url);
  return (
    <div className='flex items-center rounded-sm'>
      {url && <img
        className='h-6 w-6 min-w-6 mr-3'
        src={faviconSrc}
        alt="description"
      />}

      <a className="select-none tracking-normal font-medium overflow-hidden focus:text-indigo-700 hover:text-red-700 text-lg"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        youtube
      </a>
    </div>
  )
}
