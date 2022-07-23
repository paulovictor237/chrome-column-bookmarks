import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Column from '../components/ui/Column';
import Header from '../layouts/Header';

import { booksActions, fetchBooksmark } from '../store/booksmarkReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBooksmark()
      dispatch(booksActions.replaceBooksmark(data));
    }
    getData();
  }, [dispatch])

  return (
    <div className='h-full w-full fixed'>
      <Header />
      <Column />
    </div>
  );
}

export default App;