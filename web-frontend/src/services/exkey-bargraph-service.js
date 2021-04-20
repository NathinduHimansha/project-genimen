import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';


const base = `${BASE_URL}/Exkey/GetTrends`;
// const base = `${BASE_URL}/hello`;
const http = Http(base);



export const trendz = async (token) => http.get({ token: token });

