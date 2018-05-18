import { combineReducers } from 'redux-immutable';
import balanceReducer from '../components/GetBalanceForm/reducer';
import loginReducer from '../components/reducer';
import transactionsReducer from '../components/SendCoinsForm/reducer';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
    routing: routeReducer,
    login: loginReducer,
    balance: balanceReducer,
    transactions: transactionsReducer,
});

export default rootReducer;
