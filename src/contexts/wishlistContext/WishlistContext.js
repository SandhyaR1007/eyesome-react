import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, wishlistReducer } from "../../reducers/wishlistReducer";
import {
  deleteProductFromWishlistService,
  getWishlistItemsService,
  postAddProductToWishlistService,
} from "../../api/apiServices";
import { actionTypes } from "../../utils/actionTypes";
import { useAuthContext, useProductsContext } from "..";

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const { updateInCartOrInWish } = useProductsContext();
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    setLoadingWishlist(true);
    (async () => {
      try {
        const wishlistRes = await getWishlistItemsService();
        if (wishlistRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_WISHLIST,
            payload: wishlistRes.data.wishlist,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingWishlist(false);
      }
    })();
  }, [isAuthenticated]);

  const addProductToWishlist = async (product) => {
    try {
      const response = await postAddProductToWishlistService(product);
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.ADD_PRODUCT_TO_WISHLIST,
          payload: [{ ...product, inWish: true }, ...state.wishlist],
        });
        updateInCartOrInWish(product._id, "inWish", true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductFromWishlist = async (productId) => {
    try {
      const response = await deleteProductFromWishlistService(productId);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.DELETE_PRODUCTS_FROM_WISHLIST,
          payload: state.wishlist.filter(({ _id }) => _id !== productId),
        });
        updateInCartOrInWish(productId, "inWish", false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
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
