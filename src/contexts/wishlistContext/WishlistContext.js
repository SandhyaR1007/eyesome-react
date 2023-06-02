import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, wishlistReducer } from "../../reducers/wishlistReducer";
import {
  deleteProductFromWishlistService,
  getWishlistItemsService,
  postAddProductToWishlistService,
} from "../../api/apiServices";
import { actionTypes } from "../../utils/actionTypes";
import { useAuthContext, useProductsContext } from "..";
import { notify } from "../../utils/utils";

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { token } = useAuthContext();
  const { updateInCartOrInWish } = useProductsContext();
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [disableWish, setDisableWish] = useState(false);
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    if (token) {
      setLoadingWishlist(true);
      (async () => {
        try {
          const wishlistRes = await getWishlistItemsService(token);

          if (wishlistRes.status === 200) {
            dispatch({
              type: actionTypes.INITIALIZE_WISHLIST,
              payload: wishlistRes.data.wishlist,
            });
          }
        } catch (err) {
          console.log(err);
          notify(
            "error",
            err?.response?.data?.errors
              ? err?.response?.data?.errors[0]
              : err?.response?.data?.message
          );
        } finally {
          setLoadingWishlist(false);
        }
      })();
    }
  }, [token]);

  const addProductToWishlist = async (product) => {
    setDisableWish(true);
    try {
      const response = await postAddProductToWishlistService(product, token);
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.ADD_PRODUCT_TO_WISHLIST,
          payload: [{ ...product, inWish: true }, ...state.wishlist],
        });
        updateInCartOrInWish(product._id, "inWish", true);
      }
      notify("success", "Added to wishlist");
    } catch (err) {
      console.log(err);
      notify(
        "error",
        err?.response?.data?.errors
          ? err?.response?.data?.errors[0]
          : "Some Error Occurred!!"
      );
    } finally {
      setDisableWish(false);
    }
  };

  const deleteProductFromWishlist = async (productId) => {
    setDisableWish(true);
    try {
      const response = await deleteProductFromWishlistService(productId, token);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.DELETE_PRODUCTS_FROM_WISHLIST,
          payload: state.wishlist.filter(({ _id }) => _id !== productId),
        });
        updateInCartOrInWish(productId, "inWish", false);
        notify("warn", "Removed from wishlist");
      }
    } catch (err) {
      console.log(err);
      notify(
        "error",
        err?.response?.data?.errors
          ? err?.response?.data?.errors[0]
          : "Some Error Occurred!!"
      );
    } finally {
      setDisableWish(false);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        disableWish,
        loadingWishlist,
        addProductToWishlist,
        deleteProductFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
