import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { MouseEvent, forwardRef, useRef } from 'react';
import { CgMenuBoxed } from 'react-icons/cg';
import { TbDots } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Line } from '../line';
import { Props } from './types';

export const Column = forwardRef<HTMLDivElement, Props>(
  (
    {
      column,
      defaultTitle,
      children,
      className,
      classNameTitle,
      threeDots = false,
      ...rest
    },
    ref
  ) => {
    const onContextMenu = useContextMenu((state) => state.onContextMenu);
    const itemId = useContextMenu((state) => state.item?.id);
    const locked = useMenuOptions((state) => state.lockedEdition);
    const actionRef = useRef<HTMLButtonElement>(null);

    const title = defaultTitle ? defaultTitle : column?.title;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const buttonPosition = actionRef.current?.getBoundingClientRect();
      if (!buttonPosition || !column) return;
      const pos = {
        x: buttonPosition.left + window.pageXOffset + buttonPosition.width / 2,
        y: buttonPosition.top + window.pageYOffset,
        column: true,
      };
      onContextMenu(pos, column);
    };

    const enableEdition = !locked && !defaultTitle;

    return (
      <div
        ref={ref}
        className={twMerge(
          'md:w-80 w-full flex-shrink-0 flex flex-col animate-columns border-2 rounded-lg',
          locked ? 'border-transparent' : 'border-warcraft-red'
        )}
      >
        <div className="h-full p-1 flex flex-col">
          <section
            className={twMerge(
              'bg-peve-light rounded-2xl p-3 h-full sc2 shadow-lg overflow-y-auto',
              itemId === column?.id && 'bg-peve-gray',
              className
            )}
            {...rest}
          >
            <main className="flex flex-col gap-3">
              <button
                ref={actionRef}
                onClick={handleClick}
                disabled={locked || !!defaultTitle}
                className={twMerge(
                  'group relative mb-1 border-peve-dark text-peve-dark bg-warcraft-yellow font-bold select-none flex items-center justify-center h-10 rounded-md',
                  enableEdition && 'hover:bg-peve-selected',
                  enableEdition ? 'cursor-pointer' : 'cursor-default',
                  itemId === column?.id && 'bg-warcraft-red',
                  classNameTitle
                )}
              >
                <h1 className="truncate w-52"> {title}</h1>
                {enableEdition && (
                  <CgMenuBoxed
                    className="absolute right-3 group-hover:text-peve-gray"
                    size={28}
                  />
                )}
              </button>
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
  }
);
