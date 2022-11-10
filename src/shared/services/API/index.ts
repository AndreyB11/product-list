import axios, { AxiosRequestConfig } from "axios";

export const API_URL = "http://localhost:3000";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 180000,
  headers: {
    Accept: "application/json",
  },
};

export default axios.create(axiosConfig);
