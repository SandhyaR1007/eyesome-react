import { actionTypes } from "../utils/actionTypes";

export const initialState = {
  allProducts: [],
  cart: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case actionTypes.INITIALIZE_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};
