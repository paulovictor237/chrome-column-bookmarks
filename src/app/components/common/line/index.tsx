import { twMerge } from 'tailwind-merge';
import { Props } from './types';

export const Line = ({
  title,
  onClick,
  children,
  selected,
  className,
  disabled = false,
}: Props) => {
  // const enableEditor = useMenuOptions((state) => state.enableEditor);
  return (
    <div
      className={twMerge(
        'bg-peve-dark p-1 px-3 h-10 flex items-center justify-between rounded-md w-full cursor-pointer ',
        !disabled ? ' hover:bg-peve-selected' : 'cursor-default',
        selected && 'bg-peve-zinc'
      )}
      onClick={onClick}
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
      {/* {enableEditor && <Delete id={id} title={title} />} */}
    </div>
  );
};
