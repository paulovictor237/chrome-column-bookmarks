import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const Line = forwardRef<HTMLDivElement, Props>(
  (
    { title, onClick, children, selected, className, disabled, showMenu },
    ref
  ) => {
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
          <span className="text-ellipsis	whitespace-nowrap overflow-hidden">
            {title}
          </span>
        </div>
      </div>
    );
  }
);
