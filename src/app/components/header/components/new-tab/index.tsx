import { useMenuOptions } from '@/app/zustand/options';
import { AiFillPlusCircle } from 'react-icons/ai';

export function NewTabMenu() {
  const newTab = useMenuOptions((state) => state.newTab);
  const optionsHandler = useMenuOptions((state) => state.changeNewTab);

  return (
    <AiFillPlusCircle
      size={28}
      className={newTab ? 'text-peve-selected' : ''}
      onClick={() => optionsHandler()}
    />
  );
}
