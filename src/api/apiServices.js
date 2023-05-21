import axios from "axios";
import {
  CART_URL,
  PRODUCTS_URL,
  LOGIN_URL,
  WISHLIST_URL,
  CATEGORIES_URL,
} from "./apiUrls";

const token = localStorage.getItem("token");
export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });

export const signupService = (username, email, password) =>
  axios.post(LOGIN_URL, { username, email, password });

export const getAllProductsService = () => axios.get(PRODUCTS_URL);

export const getProductByIdService = (productId) =>
  axios.get(`${PRODUCTS_URL}/${productId}`);

export const getCartItemsService = () =>
  axios.get(CART_URL, {
    headers: {
      authorization: token,
    },
  });

export const postAddProductToCartService = (product) =>
  axios.post(
    CART_URL,
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const postUpdateProductQtyCartService = (productId, type) =>
  axios.post(
    `${CART_URL}/${productId}`,
    {
      action: {
        type,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromCartService = (productId) =>
  axios.delete(`${CART_URL}/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getWishlistItemsService = () =>
  axios.get(WISHLIST_URL, {
    headers: {
      authorization: token,
    },
  });

export const postAddProductToWishlistService = (product) =>
  axios.post(
    WISHLIST_URL,
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromWishlistService = (productId) =>
  axios.delete(`${WISHLIST_URL}/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getAllCategoriesService = () => axios.get(CATEGORIES_URL);
