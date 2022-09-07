import '@/infra/styles/globals.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Home } from './app/modules/home';
import { store } from './app/reducer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
