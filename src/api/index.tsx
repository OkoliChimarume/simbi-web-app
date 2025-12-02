// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // change this
  timeout: 8000,
});

// Optional: request interceptor (add token, headers, etc.)
api.interceptors.request.use(
  (config) => {
    // Example: attach auth token
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: response interceptor (global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
