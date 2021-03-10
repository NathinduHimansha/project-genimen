import { BASE_URL } from './env';
import { Http } from '../common/utils';

// const base = `${BASE_URL}/uras`;
const base = `https://dog.ceo/api/breeds/image/random`;
const http = Http(base);

export const getFeatures = async () => http.get();
export const analyseFeatures = async (data) => http.post(data);
