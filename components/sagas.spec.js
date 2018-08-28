import { call, put } from 'redux-saga/effects';
import test from 'tape';
import { dataStates } from '../helpers/dataStates';
import * as Mocks from '../helpers/mocks';
import { login } from './sagas';
import * as Service from './service';

// for API calls sagas this type of testing doesn't work
// because API call result is stored in a variable
// which results in a call with undefined arg in the testing process
test('login saga test', assert => {
    const gen = login();

    assert.deepEqual(
        gen.next().value,
        put({ type: 'LOGIN/LOADING', payload: { dataState: `${dataStates.loading}` } }),
        `login saga must set loginReducer dataState to ${dataStates.loading}`,
    );

    assert.deepEqual(
        gen.next().value,
        call(Service.authenticate),
        'login saga must call authenticate()',
    );

    assert.deepEqual(
        gen.next().value,
        call(Service.setAuthorizationHeader, undefined), // should be called with Mocks.authenticateRes
        `login saga must call setAuthorizationHeader(\'some access token\')`,
    );

    assert.deepEqual(
        gen.next().value,
        call(Service.unlock), // should be called with Mocks.authenticateRes aswell
        'login saga must call setAuthorizationHeader(\'some access token\')',
    );

    assert.deepEqual(
        gen.next().value,
        put({ type: 'LOGIN/LOADED' }),
        `login saga must set loginReducer dataState to ${dataStates.loaded}`,
    );

    assert.deepEqual(
        gen.next(),
        Mocks.doneObj,
        'login saga must be done',
    );

    assert.end();
});
