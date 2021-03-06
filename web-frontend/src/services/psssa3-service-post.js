import { BASE_URL } from './env';
import { Http, getToken } from '../common/utils';
const base = `${BASE_URL}/ModelSentiment/analyze` ; // This is the real url for backend getting sentiment results
const http = Http(base);


export const analysePhones = async (data, token) => http.post({ data: data, token: token }); // real backend data for sentiment values