import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineLink from '../components/ui/LineLink';
import Header from '../layouts/Header';
import { RootState } from '../store';
import { booksActions, fetchBooksmark } from '../store/booksmarkReducer';
import './Home.css';

function App() {
  const booksmark = useSelector((state: RootState) => state.booksReducer.booksmark);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBooksmark()
      dispatch(booksActions.replaceBooksmark(data));
    }
    getData();
  }, [dispatch])

  console.log(booksmark)

  const url = 'https://www.youtube.com'

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <LineLink url={url} />
      </header >
    </div >
  );
}

export default App;