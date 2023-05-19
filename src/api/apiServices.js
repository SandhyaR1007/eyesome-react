import axios from "axios";
import { LOGIN_URL } from "./apiUrls";

export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });
