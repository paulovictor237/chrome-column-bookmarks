import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Column from './Column';

export default function TreeFolders() {
  const Bookmark = useSelector((state: RootState) => state.SiteReducer.Bookmark);
  const otherBookmark = useSelector((state: RootState) => state.SiteReducer.otherBookmark);
  const columns = useSelector((state: RootState) => state.SiteReducer.columns);

  return (
    <div className=' heightColumn overflow-x-auto w-screen bottom-0 fixed flex sc2 p-1'>
      {columns.map((column) => {
        return <Column key={column.id} folder={column} />
      })}
    </div>
  )
}
