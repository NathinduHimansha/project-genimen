import { BASE_URL } from './env';
import { Http } from '../common/utils';
import axios from 'axios';

const base = `${BASE_URL}/Exkey/GetCandidates`;
const http = Http(base);



 export const otherKeywordsTrend = async (token) => http.get({ token: token });

