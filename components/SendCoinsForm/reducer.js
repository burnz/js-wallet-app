import { fromJS } from 'immutable';
import { combineActions, handleActions } from 'redux-actions';
import * as Actions from './actions';

const INITIAL_STATE = fromJS({
    data: [],
    dataState: null,
    error: null,
});

const transactionsReducer = handleActions({
    [combineActions(Actions.init, Actions.loading)]: (state, { payload: { dataState } }) => {
        return state.set('dataState', dataState);
    },
    [combineActions(Actions.loaded)]: (state, { payload: { dataState, data } }) => {
        return state
            .set('dataState', dataState)
            .update('data', arr => arr.push(fromJS(data)))
            .set('error', null);
    },
    [combineActions(Actions.failed)]: (state, { payload: { dataState, err } }) => {
        return state.set('dataState', dataState).set('error', fromJS(err));
    },
}, INITIAL_STATE);

export default transactionsReducer;
