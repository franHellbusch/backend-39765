import axios from "axios";

const authApiUrl = "http://localhost:8080/api/v1";

export const getProducts = async (options) => {
  const parsedOptions = {
    limit: options?.limit || "",
    page: options?.page || "",
    sort: options?.sort || "",
    query: options?.query || "",
  };

  const queryParams = `?limit=${parsedOptions.limit}&page=${parsedOptions.page}&sort=${parsedOptions.sort}&query=${parsedOptions.query}`;

  return await axios.get(`${authApiUrl}/products${queryParams}`);
};

export const getProductById = async (id) => {
  return await axios.get(`${authApiUrl}/products/${id}`);
};

export const postProduct = async (user) => {
  return await axios.post(`${authApiUrl}/products`, user);
};

export const updateProduct = async (id, user) => {
  return await axios.put(`${authApiUrl}/products/${id}`, user);
};

export const deleteProductById = async (id) => {
  return await axios.delete(`${authApiUrl}/products/${id}`);
};
