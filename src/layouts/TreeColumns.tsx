import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import Column from '../components/ui/Column';
import { RootState } from '../store';

export default function TreeColumns() {
  const columns = useSelector((state: RootState) => state.siteReducer.columns);
  const searchFolder = useSelector((state: RootState) => state.siteReducer.searchFolder);
  const searchBar = useSelector((state: RootState) => state.optionsReducer.searchBar);

  return (
    <div className=' overflow-x-auto w-full flex sc2 p-1 h-full'>
      <AnimatePresence presenceAffectsLayout>
        {searchBar && <Column key={-500} folder={searchFolder} index={-1}
          status={searchFolder.children.length > 0 ? "Search" : "Search Empty"}
        />}
        {columns.map((column, index) => {
          return <Column key={column.id} folder={column} index={index} />
        })}
      </AnimatePresence>
    </div>
  )
}
