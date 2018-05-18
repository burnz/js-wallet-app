import axios from 'axios';
import { loginStub } from '../../helpers/stubs';

export const sendCoins = ({ from, to, amount }) => {
    const request = { address: to, amount, walletPassphrase: loginStub.password, minConfirms: 0 };
    return axios.post('tbtc/wallet/${from}/sendcoins', request);
};
