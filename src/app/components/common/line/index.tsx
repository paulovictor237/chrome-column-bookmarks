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
      className={`
        hover:bg-peve-selected bg-peve-dark p-1 px-3 h-10 flex items-center justify-between rounded-md ${
          selected && 'bg-peve-zinc'
        }`}
      onClick={onClick}
    >
      <div
        className={twMerge(
          'cursor-pointer flex items-center h-full w-full overflow-hidden',
          className
        )}
      >
        {children}
        <span className="text-ellipsis	whitespace-nowrap overflow-hidden">
          {title}
        </span>
      </div>
      {/* {enableEditor && <Delete id={id} title={title} />} */}
    </div>
  );
};
