import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import configureStore from './configureStore';
import './index.css';
import { Routes } from './routes';
import configureHttpService from './services/http';

export const store = configureStore();

configureHttpService(store);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
        return state.get('routing').toJS();
    },
});

const rootElement = document.getElementById('root');

const renderApp = () => render(
    <Provider store={store}>
        <Routes store={store} history={history}/>
    </Provider>,
    rootElement,
);

if (module.hot) {
    module.hot.accept(['./routes', './reducers'], () => {
        store.replaceReducer(require('./reducers').default);
        renderApp();
    });
}

renderApp();

