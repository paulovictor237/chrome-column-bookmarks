import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';
import { getFaviconUrlV3 } from '../../services/getFaviconUrl';
import { RootState } from '../../store';
import { Site } from '../../types/Site';

type Props = {
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
}: Props) => {
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab);
  return (
    <a
      className={twMerge(
        'p-1 px-3 hover:bg-peve-selected filter:brightness-105 overflow-hidden h-10 flex items-center justify-start bg-peve-dark rounded-md',
        selected && 'bg-zinc-600',
        className
      )}
      href={link}
      target={newTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      draggable={false}
      role="button"
      aria-disabled={!!onClick}
      onClick={onClick}
    >
      {children}
      <span className="text-ellipsis	whitespace-nowrap overflow-hidden">
        {title}
      </span>
    </a>
  );
};
