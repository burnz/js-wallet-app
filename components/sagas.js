import BitGoJS from 'bitgo';
import { put, takeLatest } from 'redux-saga/effects';
import { accessToken } from '../helpers/stubs';
import * as Actions from './actions';

export function* login() {
    try {
        yield put(Actions.loading({}));
        const bitgo = new BitGoJS.BitGo({ env: 'test', accessToken });
        const authenticateRes = yield call(bitgo.session({}));
        console.log('login authenticateRes: ', authenticateRes);
        // const authenticateRes = yield call(authenticate);
        // const { data } = authenticateRes;
        // yield call(setAuthorizationHeader, data.access_token);
        // yield call(unlock);
        yield put(Actions.loaded({ data }));
    } catch (err) {
        yield put(Actions.failed({ err: err.toString() }));
    }
}

export function* watchLogin() {
    yield takeLatest(Actions.init, login);
}
