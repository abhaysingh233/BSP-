import axios from "axios";

export const api = axios.create({
  baseURL: "http://BSP_BACKEND_IP:PORT",
  timeout: 10000
});
