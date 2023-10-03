import { config } from "@/config/config";
import axios from "axios";

export const getCartById = async (id) => {
  return await axios.get(`${config.apiUrl}/carts/${id}`);
};

export const postProductInCart = async (cartId, productId) => {
  return await axios.post(`${config.apiUrl}/carts/${cartId}/products/${productId}`);
};

export const updateProductQuantityInCart = async (cartId, productId, quantity) => {
  const queryParams = `?quantity=${quantity}`;

  return await axios.put(`${config.apiUrl}/carts/${cartId}/products/${productId}${queryParams}`);
};

export const deleteProductInCart = async (cartId, productId) => {
  return await axios.delete(`${config.apiUrl}/carts/${cartId}/products/${productId}`);
};

export const deleteAllProductsInCart = async (id) => {
  return await axios.delete(`${config.apiUrl}/carts/${id}`);
};

export const finishPurchase = async (cartId) => {
  return await axios.post(`${config.apiUrl}/carts/${cartId}/purchase`);
};
