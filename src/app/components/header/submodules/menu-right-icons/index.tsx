import { TitleTag } from '@/app/components/common/title-tag';
import { FaGithub } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

export const RightIcons = () => (
  <section className="flex gap-2 justify-between items-center h-full">
    <TitleTag title="Github" position="right">
      <a
        href="https://github.com/paulovictor237/chrome-column-bookmarks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={28} />
      </a>
    </TitleTag>
    <TitleTag title="Buy me a coffee!" position="right">
      <a
        href="https://www.buymeacoffee.com/peve"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiBuymeacoffee size={28} />
      </a>
    </TitleTag>
  </section>
);
