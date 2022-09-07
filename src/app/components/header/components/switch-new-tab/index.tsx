import { Switch } from '@/app/components/common/switch';
import { RootState } from '@/app/reducer';
import { optionsActions } from '@/app/reducer/options';
import { useDispatch, useSelector } from 'react-redux';

export const NewTab = () => {
  const dispach = useDispatch();
  function optionsHandler() {
    dispach(optionsActions.changeNewTab());
  }
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab);

  return (
    <>
      <span>New tab</span>
      <Switch variable={newTab} OnClick={optionsHandler} />
    </>
  );
};
