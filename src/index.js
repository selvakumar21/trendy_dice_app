import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import usersReducer from './features/users';

const store = configureStore({
  reducer: {
    users: usersReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
