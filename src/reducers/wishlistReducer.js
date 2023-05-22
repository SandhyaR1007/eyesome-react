import { actionTypes } from "../utils/actionTypes";

export const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_WISHLIST:
      return { ...state, wishlist: action.payload };

    case actionTypes.ADD_PRODUCT_TO_WISHLIST:
      return { ...state, wishlist: action.payload };

    case actionTypes.DELETE_PRODUCTS_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
};
