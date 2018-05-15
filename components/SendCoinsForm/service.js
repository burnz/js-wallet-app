import axios from 'axios';
import { LOCAL_BITGO_URL } from '../../config';
import { loginStub } from '../service';

export const sendCoins = ({ from, to, amount }) => {
    const request = { address: to, amount, walletPassphrase: loginStub.password, minConfirms: 0 };
    return axios.post(`${LOCAL_BITGO_URL}tbtc/wallet/${from}/sendcoins`, request);
};
