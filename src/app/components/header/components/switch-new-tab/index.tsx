import { Switch } from '@/app/components/common/switch';
import { useMenuOptions } from '@/app/zustand/options';

export const NewTab = () => {
  const newTab = useMenuOptions((state) => state.newTab);
  const optionsHandler = useMenuOptions((state) => state.changeNewTab);

  return (
    <>
      <span>New tab</span>
      <Switch variable={newTab} OnClick={optionsHandler} />
    </>
  );
};
