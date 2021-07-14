import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import store from "./store"
// import {Provider} from "react-redux";

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  // <Provider store = {store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);

