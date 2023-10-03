import { config } from "@/config/config";
import axios from "axios";

export const getTicketsByEmail = async (email) => {
  return await axios.get(`${config.apiUrl}/tickets/${email}`);
};
