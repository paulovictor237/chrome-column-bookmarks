import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { getFaviconUrlV3 } from '../../services/getFaviconUrl';
import { RootState } from '../../store';
import { Site } from '../../types/Site';
import { Delete } from '../ui/Delete';

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  link?: string;
  selected?: boolean;
  onClick?: () => void;
};

export const Line = ({
  link,
  title,
  onClick,
  children,
  selected,
  className,
  id,
}: Props) => {
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab);
  const enableEditor = useSelector(
    (state: RootState) => state.optionsReducer.enableEditor
  );

  const Container = ({ children }: { children: ReactNode }) => {
    const className =
      'cursor-pointer flex items-center h-full w-full overflow-hidden';
    if (link)
      return (
        <a
          className={className}
          href={!enableEditor ? link : undefined}
          target={newTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          draggable={false}
          role="button"
          aria-disabled={!!onClick}
        >
          {children}
        </a>
      );
    return <div className={className}>{children}</div>;
  };

  return (
    <div
      className={twMerge(
        'p-1 px-3 hover:bg-peve-selected filter:brightness-105 h-10 flex items-center justify-between bg-peve-dark rounded-md',
        selected && 'bg-zinc-600',
        className
      )}
      onClick={onClick}
    >
      <Container>
        {children}
        <span className="text-ellipsis	whitespace-nowrap overflow-hidden">
          {title}
        </span>
      </Container>
      {enableEditor && <Delete id={id} title={title} />}
    </div>
  );
};
