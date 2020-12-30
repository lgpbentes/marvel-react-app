import axios from 'axios'
require('dotenv').config()
export const baseURL = 'https://gateway.marvel.com:443/v1/public';
// TODO: move me to .env
export const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;

const api = axios.create({ baseURL });

api.interceptors.request.use(async config => {
  if (!config.params) {
    config.params = {};
  }

  config.params.apikey = publicKey;

  return config;
});

export default api;
