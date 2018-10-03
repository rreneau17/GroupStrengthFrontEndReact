import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={store(reducers)}><App /></Provider>,
    document.querySelector('#root')
);