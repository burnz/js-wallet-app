import { routerMiddleware } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
    composeEnhancers(applyMiddleware(
        routerMiddleware(browserHistory),
        thunk,
    ))(createStore)(rootReducer)
);

export default configureStore;
