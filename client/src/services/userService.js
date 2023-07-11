import axios from "axios";

const authApiUrl = "http://localhost:8080/api/v1";

export const login = async (user) => {
  const { email, password } = user;
  const queryParams = `?email=${email}&password=${password}`;

  return await axios.post(`${authApiUrl}/login${queryParams}`);
};

export const register = async (user) => {
  return await axios.post(`${authApiUrl}/register`, user);
};

export const logout = async (user) => {
  return await axios.post(`${authApiUrl}/logout`, user);
};
