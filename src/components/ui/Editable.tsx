import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { optionsActions } from '../../store/optionsReducer';
import Switch from './Switch';

export default function Editable() {
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
}
