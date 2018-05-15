import { createAction } from 'redux-actions';
import * as GetBalanceService from './service';
import * as GetBalanceFormTypes from './types';

export const setBalanceInit = createAction(GetBalanceFormTypes.SET_BALANCE_INIT);
export const setBalanceLoading = createAction(GetBalanceFormTypes.SET_BALANCE_LOADING);
export const setBalanceLoaded = createAction(GetBalanceFormTypes.SET_BALANCE_LOADED);
export const setBalanceFailed = createAction(GetBalanceFormTypes.SET_BALANCE_FAILED);
export const setBalance = createAction(GetBalanceFormTypes.SET_BALANCE);

export const getBalance = ({ id }) => {
    return dispatch => {
        dispatch(setBalanceLoading());
        GetBalanceService
            .getBalance({ id })
            .then(response => {
                console.log('getBalance response: ', response);
                dispatch(setBalance(response.data.balance));
                dispatch(setBalanceLoaded());
            })
            .catch(err => {
                console.log('getBalance err: ', err);
                dispatch(setBalanceFailed())
            });

    };
};
