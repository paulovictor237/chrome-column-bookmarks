import { TitleTag } from '@/app/components/common/title-tag';
import { FaGithub } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

export const LeftIcons = () => {
  return (
    <section className="flex gap-2 justify-between items-center h-full">
      <a
        href="https://github.com/paulovictor237/chrome-column-bookmarks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TitleTag title="Github" position="right">
          <FaGithub
            className="text-peve-zinc hover:text-peve-selected cursor-pointer"
            size={28}
          />
        </TitleTag>
      </a>
      <a
        href="https://www.buymeacoffee.com/peve"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TitleTag title="Buy me a coffee!" position="right">
          <SiBuymeacoffee
            size={28}
            className="text-peve-zinc hover:text-peve-selected cursor-pointer"
          />
        </TitleTag>
      </a>
    </section>
  );
};
