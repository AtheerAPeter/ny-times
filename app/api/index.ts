import Axios, {AxiosResponse, AxiosError, AxiosStatic} from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakeCaseKeys from 'snakecase-keys';
const client = Axios.create();
// @ts-ignore
import {API_SECRET} from '@env';

export const BASE_URL = 'https://api.nytimes.com';

const onSuccess = function (response: AxiosResponse) {
  return response ? camelcaseKeys(response, {deep: true}) : response;
};

const onError = function (error: AxiosError) {
  if (Axios.isCancel(error)) {
    return Promise.reject(error);
  } else {
    console.log('Error Message:', error.message);
  }

  return Promise.reject(error);
};

client.interceptors.response.use(onSuccess, onError);
client.interceptors.request.use(
  config => {
    if (
      !['application/x-www-form-urlencoded', 'multipart/form-data'].includes(
        config.headers['Content-Type'] as string,
      ) &&
      config.data
    ) {
      config.data = snakeCaseKeys(config.data, {deep: true});
    }
    return config;
  },
  error => Promise.reject(error),
);

client.defaults.baseURL = BASE_URL;
client.defaults.params = {};
client.defaults.params['api-key'] = API_SECRET;

const request = client as AxiosStatic;

export default request;
