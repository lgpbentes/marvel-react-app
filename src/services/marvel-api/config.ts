import axios from 'axios'

export const baseURL = 'https://gateway.marvel.com:443/v1/public';
// TODO: move me to .env
export const publicKey = '96217a48cad94538b4016516d4587e1a';

const api = axios.create({ baseURL });

api.interceptors.request.use(async config => {
  if (!config.params) {
    config.params = {};
  }

  config.params.apikey = publicKey;

  return config;
});

export default api;
