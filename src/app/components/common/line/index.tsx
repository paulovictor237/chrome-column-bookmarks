import { RootState } from '@/app/reducer';
import { useSelector } from 'react-redux';
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
  const enableEditor = useSelector(
    (state: RootState) => state.optionsReducer.enableEditor
  );

  return (
    <div
      className={twMerge(
        'p-1 px-3 hover:bg-peve-selected filter:brightness-105 h-10 flex items-center justify-between bg-peve-dark rounded-md',
        selected && 'bg-zinc-600',
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
