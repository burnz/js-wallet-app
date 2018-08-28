import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Service from './service';

function* createTransaction({ payload: { params } }) {
    try {
        yield put(Actions.loading({}));
        const { data } = yield call(Service.sendCoins, params);
        yield put(Actions.loaded({ data }));
    } catch (err) {
        yield put(Actions.failed({ err: err.toString() }));
    }
}

export function* watchTransaction() {
    yield takeLatest(Actions.init, createTransaction);
}
