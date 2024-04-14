import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate persistor={persistor} loading={null}>
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
  </PersistGate>
  </Provider>
)