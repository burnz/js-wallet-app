import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = fromJS({
    locationBeforeTransitions: null,
});

const routeReducer = handleActions({
    [LOCATION_CHANGE]: (state, action) => (
        state.set('locationBeforeTransitions', action.payload)
    ),
}, INITIAL_STATE);

export default routeReducer;
