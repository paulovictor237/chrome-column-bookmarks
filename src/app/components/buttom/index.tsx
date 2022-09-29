import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        'p-3 w-full rounded-md bg-peve-zinc hover:bg-peve-selected ',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
