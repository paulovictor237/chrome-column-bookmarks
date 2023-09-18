import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { Props, Styles } from './types';

export const Text: FC<Props> = ({
  mode: Wrapper = 'span',
  children,
  className,
  ...rest
}) => {
  const style: Styles = {
    h1: 'text-gray-800 text-4xl font-bold',
    h2: 'text-gray-800 text-3xl font-bold',
    h3: 'text-gray-800 text-2xl font-bold',
    h4: 'text-gray-800 text-xl font-bold',
    h5: 'text-gray-800 text-lg font-bold',
    h6: 'text-gray-800 text-md font-bold',
    p: 'text-gray-800 text-md',
    label: 'text-gray-800 text-base',
    strong: '',
    span: '',
  };
  return (
    <Wrapper className={twMerge(style[Wrapper], className)} {...rest}>
      {children}
    </Wrapper>
  );
};
