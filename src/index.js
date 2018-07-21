import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from "react-redux";
import { initializeState } from "./initializeState";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(rootReducer, initializeState(), devToolsEnhancer({}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
