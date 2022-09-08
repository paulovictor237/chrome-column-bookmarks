import { Switch } from '@/app/components/common/switch';
import { useMenuOptions } from '@/app/zustand/options';

export const Editable = () => {
  const handlerOpt = useMenuOptions((state) => state.changeEnableEditor);
  const enableEditor = useMenuOptions((state) => state.enableEditor);

  return (
    <>
      <span>Enable edit</span>
      <Switch variable={enableEditor} OnClick={handlerOpt} />
    </>
  );
};
