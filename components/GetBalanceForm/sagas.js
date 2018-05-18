import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Service from './service';

function* loadBalance({ payload: { params } }) {
    try {
        yield put(Actions.loading({}));
        const balanceRes = yield call(Service.getBalance, params);
        const { data } = balanceRes;
        yield put(Actions.loaded({ data }));
    } catch (err) {
        yield put(Actions.failed({ err: err.toString() }));
    }
}

export function* watchBalance() {
    yield takeLatest(Actions.init, loadBalance);
}
