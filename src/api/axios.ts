import Axios, { AxiosResponse } from "axios";

/* Types */
export type RequestType<T> = {
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  url: string;
  headers?: Record<string, string>;
  body?: T;
  defaultHeaders?: boolean;
  baseURL?: string;
  needsAuth?: boolean;
};

const axios = Axios.create();

export const AxiosWrapper = async <T, K = Record<string, string>>(
  req: RequestType<K>
): Promise<T> => {
  const { body, defaultHeaders, headers, method, url, baseURL } = req;

  return new Promise<T>(async (resolve, reject) => {
    let finalHeaders = headers || {};

    if (defaultHeaders)
      finalHeaders = {
        ...headers,
        "Content-Type": "application/json",
        Accept: "application/json",
      };

    const data: void | AxiosResponse<T, K> = await axios({
      method: method.toLowerCase(),
      headers: finalHeaders,
      data: body,
      url,
      baseURL,
    }).catch((err) => {
      reject(err.response);
    });

    if (data) resolve(data.data);
  });
};
