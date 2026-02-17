import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './component/rtk/store';
import './index.css';
import App from './App';

// تحديد basename بناءً على البيئة
const basename = process.env.NODE_ENV === 'production' ? '/ecommerce-finnally' : '/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
