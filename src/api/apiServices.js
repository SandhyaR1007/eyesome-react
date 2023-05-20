import axios from "axios";
import {
  CART_URL,
  GET_ALL_PRODUCTS_URL,
  LOGIN_URL,
  UPDATE_PRODUCT_QTY_CART_URL,
} from "./apiUrls";

const token = localStorage.getItem("token");
export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });

export const signupService = (username, email, password) =>
  axios.post(LOGIN_URL, { username, email, password });

export const getAllProductsService = () => axios.get(GET_ALL_PRODUCTS_URL);

export const getCartItemsService = () =>
  axios.get(CART_URL, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

export const postAddProductToCartService = (product) =>
  axios.post(
    CART_URL,
    { product },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

export const postUpdateProductQtyCartService = (productId, type) =>
  axios.post(
    `${UPDATE_PRODUCT_QTY_CART_URL}${productId}`,
    {
      action: {
        type,
      },
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
