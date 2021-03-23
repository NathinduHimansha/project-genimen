import axios from 'axios';

export const isPasswordValid = (password) => {
  return password.length >= 6;
};
export const Http = (url) => {
  const get = async (data = null) => {
    const request = await axios({
      method: 'GET',
      url: url,
      data: data,
    });
    return request;
  };
  const post = async (data = null) => {
    const request = await axios({
      method: 'POST',
      url: url,
      data: data,
    });
    return request;
  };
  const put = async (data = null) => {
    const request = await axios({
      method: 'PUT',
      url: url,
      data: data,
    });
    return request;
  };
  const remove = async (data = null) => {
    const request = await axios({
      method: 'PUT',
      url: url,
      data: data,
    });
    return request;
  };

  return {
    get,
    post,
    put,
    remove,
  };
};
