import { useContextMenu } from '@/client/zustand/context-menu';
import { Props } from './types';

export const ContextMenuButton = ({ name, icon, onClick }: Props) => {
  const closeContextMenu = useContextMenu((state) => state.closeContextMenu);
  const handleOnClick = () => {
    onClick();
    closeContextMenu();
  };
  return (
    <button
      onClick={handleOnClick}
      className="h-10 hover:bg-warcraft-red bg-peve-dark p-2 rounded-lg flex items-center justify-between text-ellipsis	whitespace-nowrap overflow-hidden"
    >
      {name}
      {icon}
    </button>
  );
};
