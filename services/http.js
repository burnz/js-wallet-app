import $http from 'axios';

/**
 * store - is full fledged redux store, feel free to dispatch loader animations an so on
 * @param store
 */
export default () => {
    $http.interceptors.request.use((config) => {
        config.url = config.url;
        return config;
    });
};
