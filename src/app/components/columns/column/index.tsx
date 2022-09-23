import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { TbDots } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Line } from '../../common/line';
import { FolderUi } from '../folder-ui';
import { SiteUi } from '../site-ui';
import { Props } from './types';

export const Column = ({
  column,
  index,
  title,
  className,
  showTitle = false,
}: Props) => {
  const exitVariants = {
    visible: { x: [0, 20, -60], opacity: 0 },
    hidden: {},
  };

  return (
    <div className="md:w-80 w-full p-2 flex-shrink-0 flex flex-col animate-columns">
      <div className="bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg">
        {showTitle && (
          <title
            className={twMerge(
              ' border-peve-dark text-peve-dark bg-peve-selected font-bold select-none flex items-center justify-center mb-3 overflow-hidden h-10 rounded-md ',
              className
            )}
          >
            {title}
          </title>
        )}
        <main className="flex flex-col gap-3">
          {column.children.length < 1 && (
            <Line className="justify-center font-bold text-2xl" disabled>
              <TbDots />
            </Line>
          )}
          {column.children.map((item, idx) => {
            const isSite = !!(item as Site).url;
            return (
              <div key={'||' + idx}>
                {isSite && <SiteUi link={item as Site} />}
                {!isSite && <FolderUi folder={item as Folder} index={index} />}
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};
