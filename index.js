import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { configureHttpService } from './http';
import './index.css';
import rootReducer from './reducers';
import { Routes } from './routes';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        routerMiddleware(browserHistory),
        thunk,
        sagaMiddleware,
    )),
);

configureHttpService(store);

sagaMiddleware.run(rootSaga);

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

