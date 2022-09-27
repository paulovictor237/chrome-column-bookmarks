import { forwardRef } from 'react';
import { TbDots } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import { Line } from '../line';
import { Props } from './types';

export const Column = forwardRef<HTMLDivElement, Props>(
  (
    {
      title,
      children,
      className,
      classNameTitle,
      threeDots = false,
      showTitle = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="md:w-80 w-full p-2 flex-shrink-0 flex flex-col animate-columns">
        <div
          ref={ref}
          className={twMerge(
            'bg-peve-light rounded-2xl p-3 h-full overflow-y-auto sc2 shadow-lg',
            className
          )}
          {...rest}
        >
          {showTitle && (
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
        </div>
      </div>
    );
  }
);
