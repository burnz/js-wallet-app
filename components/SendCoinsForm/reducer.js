import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Types from './types';
import { dataStates } from '../GetBalanceForm/reducer';

const INITIAL_STATE = fromJS({
    state: dataStates.notAsked,
});

const transactionReducer = handleActions({
    [Types.SET_TRANSACTION_LOADING]: state => {
        return state.set('state', dataStates.loading);
    },
    [Types.SET_TRANSACTION_LOADED]: state => {
        return state.set('state', dataStates.loaded);
    },
    [Types.SET_TRANSACTION_FAILED]: state => {
        return state.set('state', dataStates.failed);
    },
}, INITIAL_STATE);

export default transactionReducer;
