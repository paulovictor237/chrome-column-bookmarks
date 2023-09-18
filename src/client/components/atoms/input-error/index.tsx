import React from 'react';
import type { Props } from './types';
import { FiXCircle } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

export const InputErrorMessage: React.FC<Props> = ({
  message,
  className,
  ...rest
}) => (
  <div
    className={twMerge(
      `flex items-center text-sm space-x-1 text-red-600`,
      className,
    )}
    {...rest}
  >
    <FiXCircle />
    <span>{message}</span>
  </div>
);
