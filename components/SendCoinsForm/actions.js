import { createAction } from 'redux-actions';
import * as TransactionTypes from './types';
import * as TransactionService from './service';

export const setTransactionLoading = createAction(TransactionTypes.SET_TRANSACTION_LOADING);
export const setTransactionLoaded = createAction(TransactionTypes.SET_TRANSACTION_LOADED);
export const setTransactionFailed = createAction(TransactionTypes.SET_TRANSACTION_FAILED);

export const sendCoins = ({ from, to, amount }) => {
    return dispatch => {
        dispatch(setTransactionLoading());
        TransactionService
            .sendCoins({ from, to, amount })
            .then(response => {
                console.log('sendCoins response: ', response);
                dispatch(setTransactionLoaded());
            })
            .catch(err => {
                console.log('sendCoins err: ', err);
                dispatch(setTransactionFailed());
            })
    }
}
