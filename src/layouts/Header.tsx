import { Settings } from '@/components/ui/Settings';
import { ReactNode, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiSettings, FiTrash2 } from 'react-icons/fi';
import { SiBuymeacoffee } from 'react-icons/si';
import NewTab from '../components/ui/NewTab';
import SearchBar from '../components/ui/SearchBar';

type TobBarIconProps = {
  children: ReactNode;
  title: string;
  href?: string;
  left?: boolean;
};
export default function Header() {
  const TobBarIcon = ({ children, title, href, left }: TobBarIconProps) => (
    <a
      href={href}
      className={`group transition-all duration-300 ease-linear`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <div className="absolute z-10 right-0 translate-y-2 bg-peve-selected w-auto p-2 m-2 min-w-max rounded-md shadow-md  text-xs font-bold transition-all duration-100 origin-left scale-0 group-hover:scale-100">
        <span>{title}</span>
      </div>
    </a>
  );
  return (
    <main className="bg-peve-light flex items-center justify-between shadow-lg gap-2 p-2">
      <section className="flex gap-2 justify-between items-center h-full">
        <Settings />
      </section>
      <SearchBar />
      <section className="flex gap-2 justify-between items-center h-full">
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
            className="text-[#FFDD00] hover:text-peve-selected cursor-pointer"
          />
        </TobBarIcon>
      </section>
    </main>
  );
}
