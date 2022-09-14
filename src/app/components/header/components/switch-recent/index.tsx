import { Switch } from '@/app/components/common/switch';
import { useMenuOptions } from '@/app/zustand/options';
import { AiFillClockCircle } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

export const ShowRecent = () => {
  const changeRecent = useMenuOptions((state) => state.changeRecent);
  const showRecent = useMenuOptions((state) => state.showRecent);

  return (
    // <>
    //   <span>Enable edit</span>
    //   <Switch variable={enableEditor} OnClick={handlerOpt} />
    // </>
    <>
      <AiFillClockCircle
        className={twMerge(
          'text-peve-zinc hover:text-peve-selected cursor-pointer ',
          showRecent && 'text-peve-selected'
        )}
        size={28}
        onClick={() => changeRecent()}
      />
    </>
  );
};
