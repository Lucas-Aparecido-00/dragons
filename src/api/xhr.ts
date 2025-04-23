import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const url = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1";

const headers = (): AxiosRequestHeaders => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
});

const getHeaders = (): AxiosRequestHeaders => {
  return headers();
};

const xhr = axios.create({
  baseURL: url,
  headers: getHeaders(),
});

export const publicXhr = axios.create({
  headers: { Accept: "application/json" },
});

export const setTokenAfterLogin = async (tokenAuth: string): Promise<void> => {
  xhr.interceptors.request.use(
    async (config: AxiosRequestConfig) => ({
      ...config,
      headers: headers(),
    }),
    (error) => Promise.reject(error)
  );
};

export default xhr;
