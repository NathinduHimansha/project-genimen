import { BASE_URL } from './env';
import { Http } from '../common/utils';

const base = `${BASE_URL}/auth`;
http = Http(base);

export const login = async (cred) => http.post(cred, '/signup');
export const signup = async (cred) => http.post(cred, '/login');
