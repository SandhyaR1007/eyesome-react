import axios from "axios";
import { GET_ALL_PRODUCTS_URL, LOGIN_URL } from "./apiUrls";

export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });

export const getAllProductsService = () => axios.get(GET_ALL_PRODUCTS_URL);
