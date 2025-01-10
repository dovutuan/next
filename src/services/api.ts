import axios, { AxiosInstance } from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { UNAUTHORIZED } from '@/constants/Common';
import Cookies from 'js-cookie';
import { CookieNames } from '@/types/Cookie.type';
import PATH_NAMES from '@/constants/PathNames';
import { BaseAPIResponse } from '@/types/BaseApi.type';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const NO_REQUIRED_AUTH_ENDPOINT = [
  '/auth/login',
  '/auth/send-forgot-email',
  '/auth/reset-password',
];
axiosInstance.interceptors.request.use(
  (config) => {
    const isNoRequiredAuthEndpoint = NO_REQUIRED_AUTH_ENDPOINT.includes(
      config.url as string,
    );
    if (Cookies.get(CookieNames.TOKEN) && !isNoRequiredAuthEndpoint) {
      config.headers['Authorization'] =
        `Bearer ${Cookies.get(CookieNames.TOKEN)}`;
    }
    return config;
  },
  (error) => error,
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === UNAUTHORIZED) {
      if (window.location) {
        window.location.href = PATH_NAMES.LOGIN;
      }
      Cookies.remove(CookieNames.TOKEN);
      return null;
    }

    return Promise.reject(error);
  },
);

export type BaseQueryOptions = {
  area?: string;
};

export const baseQuery = async (data: any, options?: BaseQueryOptions) => {
  const _options = {
    ...options,
  };
  try {
    const response = await trackPromise(axiosInstance(data), _options.area);
    return {
      response: response.data as BaseAPIResponse,
      status: response.status,
    };
  } catch (error: any) {
    return Promise.reject({
      response: error.response?.data as BaseAPIResponse,
      status: error.response?.status,
    });
  }
};

export default axiosInstance;
