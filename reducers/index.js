import { combineReducers } from 'redux-immutable';
import balanceReducer from '../components/GetBalanceForm/reducer';
import transactionReducer from '../components/SendCoinsForm/reducer';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
    routing: routeReducer,
    balance: balanceReducer,
    transaction: transactionReducer,
});

export default rootReducer;
