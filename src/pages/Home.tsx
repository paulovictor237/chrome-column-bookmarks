import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../layouts/Header';
import TreeColumns from '../layouts/TreeColumns';
import { getBookmarks } from '../services/getBookmarks';
import { SiteActions } from '../store/booksmarkReducer';
import { optionsActions } from '../store/optionsReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await getBookmarks()
      dispatch(SiteActions.initBookmark(data));
    }
    getData();
    dispatch(optionsActions.getLocalStorage());
  }, [dispatch])

  return (
    <div className='block'>
      <Header />
      <TreeColumns />
    </div>
  );
}

export default App;