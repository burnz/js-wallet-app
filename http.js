import $http from 'axios';
import { LOCAL_BITGO_URL } from './config';
// import qs from 'qs';

export const configureHttpService = () => {
    $http.interceptors.request.use((config) => {
        // config.data = qs.stringify(config.data)
        config.url = `${LOCAL_BITGO_URL}${config.url}`;
        return config;
    });
};


