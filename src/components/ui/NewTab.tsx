import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { optionsActions } from '../../store/optionsReducer';
import Switch from './Switch';

export default function NewTab() {
  const dispach = useDispatch();
  function optionsHandler() {
    dispach(optionsActions.changeState());
  }
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab)

  return (
    <span className=' inline-flex items-center gap-1 text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800'>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <Switch variable={newTab} OnClick={optionsHandler} />
        </div>
      </div>
      NewTab
    </span>
  )
}


