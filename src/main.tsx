import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './styles/globals.css';
import Home from './pages/Home';
import store from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <Home />
  </Provider>
);