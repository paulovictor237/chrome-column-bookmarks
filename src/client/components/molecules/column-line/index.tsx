import { forwardRef, useRef, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';
import { CgMenuBoxed } from 'react-icons/cg';
import { useContextMenu } from '@/client/zustand/context-menu';
import { useMenuOptions } from '@/client/zustand/options';

export const Line = forwardRef<HTMLDivElement, Props>(
  (
    { title, onClick, children, selected, className, disabled, showMenu, item },
    ref
  ) => {
    const onContextMenu = useContextMenu((state) => state.onContextMenu);
    const locked = useMenuOptions((state) => state.lockedEdition);
    const actionRef = useRef<HTMLButtonElement>(null);
    const showButton = !locked && !disabled;

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      const buttonPosition = actionRef.current?.getBoundingClientRect();
      if (!buttonPosition || !item) return;
      const pos = {
        x: buttonPosition.left + window.pageXOffset + buttonPosition.width,
        y: buttonPosition.top + window.pageYOffset,
        column: false,
      };
      onContextMenu(pos, item);
    };

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={twMerge(
          'bg-peve-dark p-1 px-3 h-10 flex items-center justify-between rounded-md w-full cursor-pointer duration-100 transition-all',
          !disabled
            ? ' hover:bg-peve-selected hover:scale-[103%] focus-within:bg-peve-selected focus-within:scale-[103%]'
            : 'cursor-default',
          selected && 'bg-peve-zinc',
          showMenu && 'bg-warcraft-red  hover:bg-warcraft-red scale-[103%]'
        )}
      >
        <div
          className={twMerge(
            'flex items-center h-full w-full overflow-hidden',
            className
          )}
        >
          {children}
          <span className="truncate" title={title}>
            {title}
          </span>
        </div>
        {showButton && (
          <button
            ref={actionRef}
            onClick={handleClick}
            className={'ml-auto text-warcraft-yellow'}
          >
            <CgMenuBoxed className="hover:text-peve-gray" size={28} />
          </button>
        )}
      </div>
    );
  }
);
