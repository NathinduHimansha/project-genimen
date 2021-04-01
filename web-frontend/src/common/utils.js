import axios from 'axios';
import jwt from 'jsonwebtoken';

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const saveToken = (token) => {
  saveToLocalStorage('id_token', token);
};

export const getToken = () => {
  return localStorage.getItem('id_token');
};

export const getTokenPayload = (token) => {
  const tokenDecoded = jwt.decode(token, { complete: true });
  return tokenDecoded;
};

export const isLoggedIn = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const tokenDecoded = jwt.decode(token, { complete: true });
  const dateNow = new Date();
  const exp = tokenDecoded.exp;
  // check if token expires withing 1 day
  const oneDayInMs = 86400000;
  // const validExp = exp - dateNow.getTime() / 1000;
  const validExp = exp - dateNow.getTime();
  const isTokenValid = validExp > oneDayInMs;
  return isTokenValid;
};

export const isPasswordValid = (password) => {
  return password.length >= 6;
};
export const isEmailValid = (email) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  return pattern.test(email);
};
export const Http = (url_prefix) => {
  const requestConf = {
    url: url_prefix,
    data: data,
  };
  const addToken = (token) => {
    const tokenHeaders = { Authorization: 'Bearer ' + token };
    if (token) {
      return {
        ...requestConf,
        headers: tokenHeaders,
      };
    }
    return requestConf;
  };
  // constructUrl if url is passed in addition to url_prefix
  const addUrl = (url) => {
    if (url) {
      return url_prefix + url;
    }
    return url_prefix;
  };
  const addData = (data) => {
    if (data) {
      return {
        ...requestConf,
        data: data,
      };
    }
    return requestConf;
  };
  const constructRequest = (method, data = null, url = '', token = '') => {
    let request = addData(data);
    request = addToken(token);
    request = addUrl(url);
    request.method = method;
    return request;
  };
  const get = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructRequest('GET', data, token, url);
    const request = await axios(conf);
    return request;
  };
  const post = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructRequest('POST', data, token, url);
    const request = await axios(conf);
    return request;
  };
  const put = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructrequest('PUT', data, token, url);
    const request = await axios(conf);
    return request;
  };
  const remove = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructrequest('DELETE', data, token, url);
    const request = await axios(conf);
    return request;
  };

  return {
    get,
    post,
    put,
    remove,
  };
};
