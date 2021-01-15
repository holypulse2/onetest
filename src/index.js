import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configurationReducer from './redux/reducers/configuration';
import { getConfiguration } from './redux/actions/configuration';
import rootSaga from './sagas';
import Main from './pages/Main';
import './tailwind.output.css';
import './index.scss';

const url = window.location.href;
let splitedUrl = url.split('?');
let locale = splitedUrl[1].split('=')[1];

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  configurationReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

console.info('aaa: ', locale)
store.dispatch(getConfiguration(locale));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
