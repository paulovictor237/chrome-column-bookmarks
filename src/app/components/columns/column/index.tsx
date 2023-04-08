import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { MouseEvent, forwardRef, useRef } from 'react';
import { CgMenuBoxed } from 'react-icons/cg';
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
  const onContextMenu = useContextMenu((state) => state.onContextMenu);
  const itemId = useContextMenu((state) => state.item?.id);
  const locked = useMenuOptions((state) => state.lockedEdition);
  const actionRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
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
        {!locked && (
          <button
            className="flex-1 w-full group text-warcraft-yellow hover:bg-peve-selected flex items-center justify-center border-2 border-warcraft-yellow rounded-lg mt-2"
            onClick={handleClick}
          >
            <div ref={actionRef}>
              <CgMenuBoxed className="group-hover:text-peve-gray" size={28} />
            </div>
          </button>
        )}
      </div>
    </div>
  );
});
