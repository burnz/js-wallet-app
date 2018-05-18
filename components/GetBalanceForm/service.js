import axios from 'axios';

export const getBalance = ({ id }) => axios.get(`tbtc/wallet/${id}`);
