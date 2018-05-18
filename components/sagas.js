import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import { authenticate, setAuthorizationHeader, unlock } from './service';

export function* login() {
    try {
        yield put(Actions.loading({}));
        const authenticateRes = yield call(authenticate);
        const { data } = authenticateRes;
        yield call(setAuthorizationHeader, data.access_token);
        yield call(unlock);
        yield put(Actions.loaded({ data }));
    } catch (err) {
        yield put(Actions.failed({ err: err.toString() }));
    }
}

export function* watchLogin() {
    yield takeLatest(Actions.init, login);
}
