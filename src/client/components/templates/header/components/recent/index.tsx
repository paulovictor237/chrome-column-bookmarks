import { useMenuOptions } from '@/client/zustand/options';
import { AiFillClockCircle } from 'react-icons/ai';

export const ShowRecent = () => {
  const changeRecent = useMenuOptions((state) => state.changeRecent);
  const showRecent = useMenuOptions((state) => state.showRecent);

  return (
    <AiFillClockCircle
      className={showRecent ? 'text-peve-selected' : ''}
      size={28}
      onClick={() => changeRecent()}
    />
  );
};
