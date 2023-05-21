import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import {
  deleteProductFromCartService,
  deleteProductFromWishlistService,
  getAllCategoriesService,
  getAllProductsService,
  getCartItemsService,
  getWishlistItemsService,
  postAddProductToCartService,
  postAddProductToWishlistService,
  postUpdateProductQtyCartService,
} from "../../api/apiServices";
import { actionTypes, filterTypes } from "../../utils/actionTypes";
import { useAuthContext } from "..";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const productsRes = await getAllProductsService();
        if (productsRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_PRODUCTS,
            payload: productsRes.data.products,
          });
        }

        const cartRes = await getCartItemsService();
        if (cartRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_CART,
            payload: cartRes.data.cart,
          });
        }

        const wishlistRes = await getWishlistItemsService();
        if (wishlistRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_WISHLIST,
            payload: wishlistRes.data.wishlist,
          });
        }
        const categoryRes = await getAllCategoriesService();
        console.log({ categoryRes });
        if (categoryRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_CATEGORIES,
            payload: categoryRes.data.categories,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [isAuthenticated]);

  const getProductById = (productId) =>
    state.allProducts.find((product) => product._id === productId);

  const addProductToCart = async (product) => {
    try {
      const response = await postAddProductToCartService({
        ...product,
        qty: 1,
      });
      console.log({ response });
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: [{ ...product, qty: 1 }, ...state.cart],
      });
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      payload: state.allProducts.map((item) =>
        item.id === product.id ? { ...item, inCart: true } : item
      ),
    });
  };

  const updateProductQtyInCart = async (productId, type) => {
    try {
      const response = await postUpdateProductQtyCartService(productId, type);
      console.log({ response });
      if (type === "increment") {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_QTY_IN_CART,
          payload: state.cart.map((product) =>
            product._id === productId
              ? { ...product, qty: product.qty + 1 }
              : product
          ),
        });
      } else {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_QTY_IN_CART,
          payload: state.cart.map((product) =>
            product._id === productId
              ? { ...product, qty: product.qty - 1 }
              : product
          ),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductFromCart = async (productId) => {
    try {
      const response = await deleteProductFromCartService(productId);
      console.log({ response });
      dispatch({
        type: actionTypes.DELETE_PRODUCTS_FROM_CART,
        payload: state.cart.filter(({ _id }) => _id !== productId),
      });
      dispatch({
        type: actionTypes.UPDATE_PRODUCTS,
        payload: state.allProducts.map((product) =>
          product._id === productId ? { ...product, inCart: false } : product
        ),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { totalPriceOfCartProducts, actualPriceOfCart } = state.cart.reduce(
    (acc, { qty, price, newPrice }) => ({
      totalPriceOfCartProducts: acc.totalPriceOfCartProducts + qty * newPrice,
      actualPriceOfCart: acc.actualPriceOfCart + qty * price,
    }),
    { totalPriceOfCartProducts: 0, actualPriceOfCart: 0 }
  );

  const addProductToWishlist = async (product) => {
    try {
      const response = await postAddProductToWishlistService(product);
      console.log({ response });
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_WISHLIST,
        payload: [{ ...product, inWish: true }, ...state.wishlist],
      });
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      payload: state.allProducts.map((item) =>
        item.id === product.id ? { ...item, inWish: true } : item
      ),
    });
  };

  const deleteProductFromWishlist = async (productId) => {
    try {
      const response = await deleteProductFromWishlistService(productId);
      console.log({ response });
      dispatch({
        type: actionTypes.DELETE_PRODUCTS_FROM_WISHLIST,
        payload: state.wishlist.filter(({ _id }) => _id !== productId),
      });
      dispatch({
        type: actionTypes.UPDATE_PRODUCTS,
        payload: state.allProducts.map((product) =>
          product._id === productId ? { ...product, inWish: false } : product
        ),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const applyFilters = (filterType, filterValue) => {
    dispatch({
      type: filterTypes.FILTERS,
      payload: { filterType, filterValue },
    });
  };
  const clearFilters = () => {
    dispatch({
      type: filterTypes.CLEAR_FILTER,
    });
  };
  const trendingProducts = state.allProducts.filter(
    (product) => product.trending
  );
  return (
    <ProductsContext.Provider
      value={{
        allProducts: state.allProducts,
        cart: state.cart,
        wishlist: state.wishlist,
        filters: state.filters,
        maxRange: state.maxRange,
        categoryList: state.categoryList,
        loading,
        trendingProducts,
        getProductById,
        addProductToCart,
        updateProductQtyInCart,
        deleteProductFromCart,
        totalPriceOfCartProducts,
        actualPriceOfCart,
        addProductToWishlist,
        deleteProductFromWishlist,
        applyFilters,
        clearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
