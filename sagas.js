import { all } from 'redux-saga/effects';
import { watchBalance } from './components/GetBalanceForm/sagas';
import { watchLogin } from './components/sagas';
import { watchTransaction } from './components/SendCoinsForm/sagas';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchBalance(),
        watchTransaction(),
    ]);
}
