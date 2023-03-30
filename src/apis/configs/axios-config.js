import axios from "axios";
import { auth } from "../../utils/auth/firebase";
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASEAPI_URL,
});

// defining a custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
api.interceptors.request.use(async (config) => {
  const token = await auth.currentUser.getIdToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
