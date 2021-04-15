import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const isObjEmtpy = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const saveToken = (token) => {
  saveToLocalStorage('id_token', token);
};
export const removeToken = () => {
  removeFromLocalStorage('id_token');
};

export const getToken = () => {
  return localStorage.getItem('id_token');
};

export const getTokenPayload = (token) => {
  const tokenDecoded = jwt_decode(token);
  return tokenDecoded.sub;
};

export const isLoggedIn = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  // uncomment/comment this line for testing
  // return true;
  const tokenDecoded = jwt_decode(token);
  const dateNow = new Date();
  const exp = tokenDecoded.exp;
  // check if token expires withing 1 day
  const oneDayInMs = 86400000;
  // const validExp = exp - dateNow.getTime() / 1000;
  const validExp = exp - dateNow.getTime();
  const isTokenValid = validExp > oneDayInMs;
  return isTokenValid;
};

export const logOut = () => {
  removeToken();
};
export const logIn = (token) => {
  saveToken(token);
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
  let requestConf = {
    url: url_prefix,
  };
  const addToken = (token) => {
    const tokenHeaders = { Authorization: 'Bearer ' + token };
    if (token) {
      requestConf = {
        ...requestConf,
        headers: tokenHeaders,
      };
    }
    return requestConf;
  };
  // constructUrl if url is passed in addition to url_prefix
  const getUrl = (url) => {
    if (url) {
      return url_prefix + url;
    }
    return url_prefix;
  };
  const addData = (data) => {
    if (data) {
      requestConf = {
        ...requestConf,
        data: data,
      };
    }
    return requestConf;
  };
  const constructRequest = (method, data = null, url = '', token = '') => {
    let request = addData(data);
    request = addToken(token);
    let fullUrl = getUrl(url);
    request['url'] = fullUrl;
    request['method'] = method;
    return request;
  };
  const get = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructRequest('GET', data, url, token);
    const request = await axios(conf);
    return request;
  };
  const post = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructRequest('POST', data, url, token);
    const request = await axios(conf);
    return request;
  };
  const put = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructrequest('PUT', data, url, token);
    const request = await axios(conf);
    return request;
  };
  const remove = async ({ data = null, url = '', token = '' } = {}) => {
    const conf = constructrequest('DELETE', data, url, token);
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
