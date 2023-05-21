import { actionTypes, filterTypes } from "../utils/actionTypes";

export const initialState = {
  allProducts: [],
  cart: [],
  wishlist: [],
  categoryList: [],
  maxRange: 0,
  filters: {
    gender: "all",
    categories: [],
    priceRange: "",
    rating: "",
    sortBy: "",
    searchText: "",
  },
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_PRODUCTS:
      const maxValue = action.payload.reduce(
        (acc, { price }) => (acc > price ? acc : price),
        0
      );
      return {
        ...state,
        allProducts: action.payload,
        maxRange: maxValue,
        filters: { ...state.filters, priceRange: maxValue },
      };

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
        cart: action.payload,
      };

    case actionTypes.INITIALIZE_WISHLIST:
      return { ...state, wishlist: action.payload };

    case actionTypes.ADD_PRODUCT_TO_WISHLIST:
      return { ...state, wishlist: action.payload };

    case actionTypes.DELETE_PRODUCTS_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case filterTypes.FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case filterTypes.CLEAR_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,

          gender: "all",
          categories: [],
          priceRange: state.maxRange,
          rating: "",
          sortBy: "",
          searchText: "",
        },
      };

    case actionTypes.INITIALIZE_CATEGORIES:
      return { ...state, categoryList: action.payload };

    default:
      return state;
  }
};
