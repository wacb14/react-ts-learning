import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

let axiosInstance: AxiosInstance;

function createAxios(baseURL: string) {
  axiosInstance = axios.create({
    baseURL,
  });
}

function setupInterceptors() {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log(`Request sent to ${config.url}`);
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`Response received from: ${response.config.url}`, {
        data: response.data,
        status: response.status,
      });
      return response;
    },
    error => {
      if (error.response) {
        console.error(`Error response from: ${error.response.config.url}`);
      }
      console.error(`Error: ${error.message}`);
      return Promise.reject(error);
    }
  );
}

export function initAxios() {
  createAxios('https://rickandmortyapi.com/api');
  setupInterceptors();
  return axiosInstance;
}
