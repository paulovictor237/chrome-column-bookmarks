import { Switch } from '@/app/components/common/switch';
import { RootState } from '@/app/reducer';
import { optionsActions } from '@/app/reducer/options';
import { useDispatch, useSelector } from 'react-redux';

export const Editable = () => {
  const dispach = useDispatch();
  function optionsHandler() {
    dispach(optionsActions.changeEnableEditor());
  }
  const enableEditor = useSelector(
    (state: RootState) => state.optionsReducer.enableEditor
  );

  return (
    <>
      <span>Enable edit</span>
      <Switch variable={enableEditor} OnClick={optionsHandler} />
    </>
  );
};
