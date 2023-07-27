import axios from "axios";

const authApiUrl = "http://localhost:8080/api/v1";

export const login = async (user) => {
  return await axios.post(`${authApiUrl}/login`, user);
};

export const register = async (user) => {
  return await axios.post(`${authApiUrl}/register`, user);
};

export const googleAuth = async () => {
  return await axios.get(`${authApiUrl}/auth/google`);
};

export const githubAuth = async () => {
  return await axios.get(`${authApiUrl}/auth/github`);
};

export const logout = async (user) => {
  return await axios.post(`${authApiUrl}/logout`, user);
};
