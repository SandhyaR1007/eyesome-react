const baseUrl = "/api";

//auth urls
export const SIGNUP_URL = `${baseUrl}/auth/signup`;
export const LOGIN_URL = `${baseUrl}/auth/login`;

//products urls

export const GET_ALL_PRODUCTS_URL = `${baseUrl}/products`;
export const GET_PRODUCT_BY_ID_URL = `${baseUrl}/products/:productId`;

//category urls
export const GET_ALL_CATEGORIES_URL = `${baseUrl}/categories`;
export const GET_CATEGORY_BY_ID_URL = `${baseUrl}/category/:categoryId`;

//cart urls
export const CART_URL = `${baseUrl}/user/cart`;
export const UPDATE_PRODUCT_QTY_CART_URL = `${baseUrl}/user/cart/`;
