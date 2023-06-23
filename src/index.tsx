import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter ,HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './scss/app.scss';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
    <AuthProvider>
    <App />
  </AuthProvider>,
    </HashRouter>
  </Provider>,
);
