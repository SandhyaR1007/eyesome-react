import axios from "axios";
import { GET_ALL_PRODUCTS_URL, LOGIN_URL, SIGNUP_URL } from "./apiUrls";

export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });

export const signupService = (username, email, password) =>
  axios.post(SIGNUP_URL, { username, email, password });

export const getAllProductsService = () => axios.get(GET_ALL_PRODUCTS_URL);
