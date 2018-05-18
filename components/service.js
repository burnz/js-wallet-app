import axios from 'axios';
import { loginStub } from '../helpers/stubs';

export const setAuthorizationHeader = (accessToken) => {
    if (accessToken) {
        console.log('setting authorization header');
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        console.log('deleting authorization header and scope');
        delete axios.defaults.headers.common.Authorization;
    }
};
export const authenticate = () => axios.post('user/login', loginStub);
export const unlock = () => axios.post('user/unlock', { otp: loginStub.otp });
