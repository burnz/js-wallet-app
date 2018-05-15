import axios from 'axios';
import { setBalanceInit } from '../components/GetBalanceForm/actions';
import { API_URL_V2 } from '../config';

export const loginStub = {
    email: 'mefimov@distillery.com',
    password: 'qetu135',
    otp: '0000000',
};

export const setAuthorizationHeader = (accessToken) => {
    if (accessToken) {
        console.log('setting authorization header');
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        console.log('deleting authorization header and scope');
        delete axios.defaults.headers.common.Authorization;
    }
};

export const authenticate = () => {
    return dispatch => {
        return axios
            .post(`${API_URL_V2}user/login`, loginStub)
            .then(response => {
                console.log('authenticate response: ', response);
                setAuthorizationHeader(response.data.access_token);
            })
            .catch(err => {
                console.log('err: ', err);
            });
    };
};

export const unlock = () => {
    return dispatch => {
        return axios
            .post(`${API_URL_V2}user/unlock`, { otp: loginStub.otp })
            .then(response => {
                console.log('unlock response: ', response);
                dispatch(setBalanceInit());
            }).catch(err => {
                console.log('err: ', err);
            });
    };
};
