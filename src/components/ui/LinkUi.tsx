import React from 'react';
import { useSelector } from 'react-redux';
import { getFaviconUrlV3 } from "../../services/getFaviconUrl";
import { RootState } from '../../store';
import { Site } from '../../types/Site';

type Props = {
  link: Site
}

export default function LinkUi({ link }: Props) {
  const { url, title } = link;
  const faviconSrc = url && getFaviconUrlV3(url);
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab)
  return (
    <a className='p-1 px-3 hover:bg-blue-suave filter:brightness-105 overflow-hidden h-10 flex items-center justify-start bg-dark800 rounded-md'
      href={url}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      draggable={false}
    >
      {
        url &&
        <img
          className='h-6 w-6 mr-3'
          src={faviconSrc}
          alt=""
        />
      }
      <span className='text-ellipsis	whitespace-nowrap overflow-hidden'
      >
        {title}
      </span>
    </a>
  )
}
