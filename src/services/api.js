import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});

export default api;
