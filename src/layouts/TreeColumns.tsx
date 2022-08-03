import { useSelector } from 'react-redux';
import Column from '../components/ui/Column';
import { RootState } from '../store';

export default function TreeColumns() {
  const columns = useSelector((state: RootState) => state.siteReducer.columns);
  const searchFolder = useSelector((state: RootState) => state.siteReducer.searchFolder);

  return (
    <div className=' heightColumn overflow-x-auto w-screen bottom-0 fixed flex sc2 p-1'>
      <Column key={-500} folder={searchFolder} index={-1} status={"search"} />
      {columns.map((column, index) => {
        return <Column key={column.id} folder={column} index={index} />
      })}
    </div>
  )
}
