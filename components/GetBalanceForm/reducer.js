import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Types from './types';

export const dataStates = {
    notAsked: 'notAsked',
    loading: 'loading',
    loadingMore: 'loadingMore',
    loaded: 'loaded',
    submitting: 'submitting',
    failed: 'failed',
    polling: 'polling',
};

const INITIAL_STATE = fromJS({
    id: undefined,
    amount: undefined,
    state: dataStates.loading,
});

const balanceReducer = handleActions({
    [Types.SET_BALANCE_INIT]: state => {
        return state.set('state', dataStates.notAsked);
    },
    [Types.SET_BALANCE_LOADING]: state => {
        return state.set('state', dataStates.loading);
    },
    [Types.SET_BALANCE_LOADED]: state => {
        return state.set('state', dataStates.loaded);
    },
    [Types.SET_BALANCE_FAILED]: state => {
        return state.set('state', dataStates.failed);
    },
    [Types.SET_BALANCE]: (state, action) => {
        return state.set('amount', action.payload)
    },
}, INITIAL_STATE);

export default balanceReducer;
