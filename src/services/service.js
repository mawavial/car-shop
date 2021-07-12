import axios, { AxiosRequestConfig } from "axios";

export class Service {
  instance = axios.create({
    timeout: 120000,
    headers: { "Content-Type": "application/json" },
  });

  get = async (url, config) => {
    return this.instance
      .get(url, config)
      .then((response) => response)
      .catch((error) => error);
  };

  post = async (url, params, config) => {
    return this.instance
      .post(url, params, config)
      .then((response) => response)
      .catch((error) => error);
  };

  put = async (url, params, config) => {
    return this.instance
      .put(url, params, config)
      .then((response) => response)
      .catch((error) => error);
  };

  delete = async (url, params, config) => {
    return this.instance
      .delete(url, config)
      .then((response) => response)
      .catch((error) => error);
  };
}
