import { BASE_URL } from './env';
import { Http, getToken } from '../common/utils';


const base = `${BASE_URL}/ModelSentiment/models`; // This is the real url for backend getting list of models
const http = Http(base);

export const getPhones = async () => http.get(); // real backend data for model list

