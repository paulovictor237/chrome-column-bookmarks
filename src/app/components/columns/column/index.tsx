import { useContextMenu } from '@/app/zustand/context-menu';
import { Folder } from '@/domain/entities/folder';
import { Site } from '@/domain/entities/site';
import { useRef } from 'react';
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
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const itemId = useContextMenu((state) => state.item?.id);
  const onContextMenu = useContextMenu((state) => state.onContextMenu);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target1 = (event?.target as HTMLDivElement).contains(ref1?.current);
    const target2 = (event?.target as HTMLDivElement).contains(ref2?.current);
    if (!(target1 || target2)) return;
    onContextMenu(event, column);
  };

  return (
    <div
      ref={ref1}
      onContextMenu={(e) => handleClickOutside(e)}
      className="md:w-80 w-full p-2 flex-shrink-0 flex flex-col animate-columns"
    >
      <div
        ref={ref2}
        onContextMenu={(e) => handleClickOutside(e)}
        className={twMerge(
          'bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg',
          itemId === column.id && 'bg-warcraft-red'
        )}
      >
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
