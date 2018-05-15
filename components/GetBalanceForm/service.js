import axios from 'axios';
import { API_URL_V2 } from '../../config';

export const getBalance = ({ id }) => axios.get(`${API_URL_V2}tbtc/wallet/${id}`);
