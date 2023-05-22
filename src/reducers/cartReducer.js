import { actionTypes } from "../utils/actionTypes";

export const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_CART:
      return { ...state, cart: action.payload };

    case actionTypes.ADD_PRODUCT_TO_CART:
      return { ...state, cart: action.payload };

    case actionTypes.UPDATE_PRODUCT_QTY_IN_CART:
      return { ...state, cart: action.payload };

    case actionTypes.DELETE_PRODUCTS_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};
