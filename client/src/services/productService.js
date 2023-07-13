import axios from "axios";

const authApiUrl = "http://localhost:8080/api/v1";

export const getProducts = async (pageUrl) => {
  return await axios.get(pageUrl || `${authApiUrl}/products`);
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
