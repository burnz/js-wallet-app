import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Service from './service';

export function* login() {
    try {
        yield put(Actions.loading({}));
        const { data } = yield call(Service.authenticate);
        yield call(Service.setAuthorizationHeader, data.access_token);
        yield call(Service.unlock);
        yield put(Actions.loaded({ data }));
    } catch (err) {
        yield put(Actions.failed({ err: err.toString() }));
    }
}

export function* watchLogin() {
    yield takeLatest(Actions.init, login);
}
