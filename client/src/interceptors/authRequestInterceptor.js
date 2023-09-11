import { errorHandler } from "@/utils";
import axios from "axios";

export const authRequestInterceptor = () => {
  const updateHeaders = (request) => {
    const newHeaders = {
      "Content-Type": "application/json",
      credentials: "include",
    };

    request.headers = newHeaders;
    request.withCredentials = true;
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      throw errorHandler(error.response.data);
    }
  );
};
