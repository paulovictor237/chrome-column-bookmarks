import { Settings } from '@/components/ui/Settings';
import { ReactNode, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiSettings, FiTrash2 } from 'react-icons/fi';
import { SiBuymeacoffee } from 'react-icons/si';
import NewTab from '../components/ui/NewTab';
import SearchBar from '../components/ui/SearchBar';

export default function Header() {
  type TobBarIconProps = { children: ReactNode; title: string; href: string };
  const TobBarIcon = ({ children, title, href }: TobBarIconProps) => (
    <a
      href={href}
      className={`group transition-all duration-300 ease-linear`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <div className="absolute z-10 right-0 translate-y-3 bg-peve-selected w-auto p-2 m-2 min-w-max rounded-md shadow-md  text-xs font-bold transition-all duration-100 origin-left scale-0 group-hover:scale-100">
        <span>{title}</span>
      </div>
    </a>
  );
  return (
    <div className="bg-peve-light flex items-center justify-between shadow-lg gap-2 p-2">
      <div className="flex gap-2 justify-between items-center h-full">
        {/* <DownloadJson /> */}
        <Settings />
        <FiTrash2
          className="text-neutral-200 hover:text-peve-selected cursor-pointer"
          size={28}
        />

        {/* <LockEdit /> */}
      </div>
      <SearchBar />
      <div className="flex gap-2 justify-between items-center h-full">
        <TobBarIcon
          href="https://github.com/paulovictor237/chrome-column-bookmarks"
          title="Github"
        >
          <FaGithub
            className="text-neutral-200 hover:text-peve-selected cursor-pointer"
            size={28}
          />
        </TobBarIcon>
        <TobBarIcon
          href="https://www.buymeacoffee.com/peve"
          title="Buy me a coffee!"
        >
          <SiBuymeacoffee
            size={28}
            className="text-yellow-300 hover:text-peve-selected cursor-pointer"
          />
        </TobBarIcon>
      </div>

      {/* <span className=' inline-flex items-center select-none text-blue-700 border border-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'>
        Version: Beta
      </span> */}
    </div>
  );
}
