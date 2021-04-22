import { BASE_URL } from './env';
import { Http } from '../common/utils';

const base = `${BASE_URL}/auth`;
const http = Http(base);

export const login = async (cred) => http.post({ data: cred, url: '/login' });
export const signup = async (cred) => http.post({ data: cred, url: '/signup' });
