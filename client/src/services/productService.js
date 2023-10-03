import { config } from "@/config/config";
import axios from "axios";

export const getProducts = async (pageUrl, limit) => {
  return await axios.get(pageUrl || `${config.apiUrl}/products${limit ? `?limit=${limit}` : "/"}`);
};

export const getProductById = async (id) => {
  return await axios.get(`${config.apiUrl}/products/${id}`);
};

export const postProduct = async (user) => {
  return await axios.post(`${config.apiUrl}/products`, user);
};

export const updateProduct = async (id, user) => {
  return await axios.put(`${config.apiUrl}/products/${id}`, user);
};

export const deleteProductById = async (id) => {
  return await axios.delete(`${config.apiUrl}/products/${id}`);
};
