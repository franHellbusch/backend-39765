import axios from "axios";

const authApiUrl = "http://localhost:8080/api/v1";

export const postCart = async () => {
  return await axios.post(`${authApiUrl}/carts`);
};

export const getCartById = async (id) => {
  return await axios.get(`${authApiUrl}/carts/${id}`);
};

export const postProductInCart = async (cartId, productId) => {
  return await axios.post(`${authApiUrl}/carts/${cartId}/products/${productId}`);
};

export const updateProuctQuantityInCart = async (cartId, productId, quantity) => {
  const queryParams = `?quantity=${quantity}`;

  return await axios.put(`${authApiUrl}/carts/${cartId}/products/${productId}${queryParams}`);
};

export const deleteProductInCart = async (cartId, productId) => {
  return await axios.delete(`${authApiUrl}/carts/${cartId}/products/${productId}`);
};

export const deleteAllProductsInCart = async (id) => {
  return await axios.delete(`${authApiUrl}/carts/${id}`);
};
