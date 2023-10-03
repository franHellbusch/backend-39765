import { config } from "@/config/config";
import axios from "axios";

export const login = async (user) => {
  return await axios.post(`${config.apiUrl}/login`, user);
};

export const register = async (user) => {
  return await axios.post(`${config.apiUrl}/register`, user);
};

export const restoreRequest = async (email) => {
  return await axios.post(`${config.apiUrl}/restoreRequest`, { email });
};

export const restorePassword = async (password, restoreToken) => {
  return await axios.post(`${config.apiUrl}/restorePassword`, { password, restoreToken });
};

export const currentUser = async () => {
  return await axios.get(`${config.apiUrl}/current`);
};

export const logout = async (user) => {
  return await axios.post(`${config.apiUrl}/logout`, user);
};
