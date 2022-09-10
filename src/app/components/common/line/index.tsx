import { useMenuOptions } from '@/app/zustand/options';
import { twMerge } from 'tailwind-merge';
import { Delete } from '../../header/components/delete';
import { Props } from './types';

export const Line = ({
  title,
  onClick,
  children,
  selected,
  className,
  id,
}: Props) => {
  const enableEditor = useMenuOptions((state) => state.enableEditor);

  return (
    <div
      className={twMerge(
        'p-1 px-3 hover:bg-peve-selected filter:brightness-105 h-10 flex items-center justify-between bg-peve-dark rounded-md',
        selected && 'bg-peve-zinc',
        className
      )}
      onClick={onClick}
    >
      <div className="cursor-pointer flex items-center h-full w-full overflow-hidden">
        {children}
        <span className="text-ellipsis	whitespace-nowrap overflow-hidden">
          {title}
        </span>
      </div>
      {enableEditor && <Delete id={id} title={title} />}
    </div>
  );
};
