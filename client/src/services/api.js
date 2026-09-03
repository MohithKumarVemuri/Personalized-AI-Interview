import axios from "axios";

const getBaseURL = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (!envUrl) {
    return "http://localhost:5000/api";
  }
  // Trim trailing slashes and ensure /api suffix
  const cleanUrl = envUrl.replace(/\/+$/, "");
  return cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;
};

const API = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

// ✅ REQUEST INTERCEPTOR (adds token)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ RESPONSE INTERCEPTOR (handles 401)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default API;