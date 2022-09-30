import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { forwardRef, useRef } from 'react';
import { TbDots } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Line } from '../line';
import { Props } from './types';

export const Column = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    column,
    title,
    children,
    className,
    classNameTitle,
    threeDots = false,
    ...rest
  } = props;
  const rf1 = useRef<HTMLDivElement>(null);
  const rf2 = useRef<HTMLDivElement>(null);
  const itemId = useContextMenu((state) => state.item?.id);
  const onContextMenu = useContextMenu((state) => state.onContextMenu);
  const locked = useMenuOptions((state) => state.lockedEdition);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const targetRf1 = (event?.target as HTMLDivElement).contains(rf1?.current);
    console.log(
      '🚀 ~ file: index.tsx ~ line 29 ~ Column ~ targetRf1',
      targetRf1
    );
    const targetRf2 = (event?.target as HTMLDivElement).contains(rf2?.current);
    if (!(targetRf2 || targetRf1)) return;
    column && !locked && onContextMenu(event, column);
  };
  return (
    <div
      ref={ref}
      className="md:w-80 w-full flex-shrink-0 flex flex-col animate-columns"
    >
      <div ref={rf1} onContextMenu={handleClickOutside} className="h-full p-2">
        <section
          ref={rf2}
          onContextMenu={handleClickOutside}
          className={twMerge(
            'bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg',
            itemId === column?.id && 'bg-warcraft-red',
            className
          )}
          {...rest}
        >
          {title && (
            <title
              className={twMerge(
                ' border-peve-dark text-peve-dark bg-peve-selected font-bold select-none flex items-center justify-center mb-3 overflow-hidden h-10 rounded-md ',
                classNameTitle
              )}
            >
              {title}
            </title>
          )}
          <main className="flex flex-col gap-3">
            {threeDots && (
              <Line className="justify-center font-bold text-2xl" disabled>
                <TbDots />
              </Line>
            )}
            {children}
          </main>
        </section>
      </div>
    </div>
  );
});
