import { actionTypes } from "../utils/actionTypes";

export const initialState = {
  allProducts: [],
  cart: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case actionTypes.UPDATE_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case actionTypes.INITIALIZE_CART:
      return { ...state, cart: action.payload };

    case actionTypes.ADD_PRODUCT_TO_CART:
      return { ...state, cart: action.payload };

    case actionTypes.UPDATE_PRODUCT_QTY_IN_CART:
      return { ...state, cart: action.payload };
    case actionTypes.DELETE_PRODUCTS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(({ _id }) => _id !== action.payload),
      };

    default:
      return state;
  }
};
