import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Youtube from './service/youtube';
import axios from 'axios';

const store = createStore(rootReducer, composeWithDevTools());
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App youtube={youtube} />
  </Provider>,
);
