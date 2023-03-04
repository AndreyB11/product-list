import axios, { AxiosRequestConfig } from "axios";

export const API_URL = "https://flask-rest-api-2cgk.onrender.com";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 180000,
  headers: {
    Accept: "application/json",
  },
};

export default axios.create(axiosConfig);
