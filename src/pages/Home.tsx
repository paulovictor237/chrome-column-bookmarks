import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../layouts/Header';
import TreeColumns from '../layouts/TreeColumns';
import { fetchBookmark, SiteActions } from '../store/booksmarkReducer';
import { optionsActions } from '../store/optionsReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBookmark()
      dispatch(SiteActions.initBookmark(data));
    }
    getData();
  }, [dispatch])

  useEffect(() => {
    dispatch(optionsActions.getLocalStorage());
  }, [dispatch])

  return (
    <div className='h-full w-full fixed'>
      <Header />
      <TreeColumns />
    </div>
  );
}

export default App;