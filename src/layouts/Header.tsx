import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import NewTab from '../components/ui/NewTab';
import SearchBar from '../components/ui/SearchBar';

export default function Header() {
  const searchBarRef = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-dark700 flex items-center justify-between shadow-lg gap-2 p-2">
      <div className="flex gap-2 justify-between items-center h-full">
        {/* <DownloadJson /> */}
        <NewTab />
        {/* <LockEdit /> */}
      </div>
      <SearchBar />
      <div className="flex gap-2 justify-between items-center h-full">
        {' '}
        <a
          href="https://github.com/paulovictor237/chrome-column-tab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="text-neutral-200 hover:text-neutral-500 cursor-pointer"
            size={28}
          />
        </a>
        <a
          href="https://www.buymeacoffee.com/peve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee
            size={28}
            className="text-yellow-300 hover:text-yellow-500 cursor-pointer"
          />
        </a>
      </div>

      {/* <span className=' inline-flex items-center select-none text-blue-700 border border-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'>
        Version: Beta
      </span> */}
    </div>
  );
}
