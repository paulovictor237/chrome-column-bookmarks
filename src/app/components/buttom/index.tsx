import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        'p-3 w-full rounded-md outline-none font-bold bg-peve-zinc hover:bg-peve-selected focus:bg-peve-selected',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
