import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, cartReducer } from "../../reducers/cartReducer";
import {
  deleteProductFromCartService,
  getCartItemsService,
  postAddProductToCartService,
  postUpdateProductQtyCartService,
} from "../../api/apiServices";
import { actionTypes } from "../../utils/actionTypes";
import { useAuthContext, useProductsContext } from "..";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const { updateInCartOrInWish } = useProductsContext();
  const [loadingCart, setLoadingCart] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setLoadingCart(true);
    (async () => {
      try {
        const cartRes = await getCartItemsService();
        if (cartRes.status === 200) {
          dispatch({
            type: actionTypes.INITIALIZE_CART,
            payload: cartRes.data.cart,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingCart(false);
      }
    })();
  }, [isAuthenticated]);

  const addProductToCart = async (product) => {
    try {
      const response = await postAddProductToCartService({
        ...product,
        qty: 1,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.ADD_PRODUCT_TO_CART,
          payload: [{ ...product, qty: 1 }, ...state.cart],
        });
        updateInCartOrInWish(product._id, "inCart", true);
      }
      console.log({ response });
    } catch (err) {
      console.log(err);
    }
  };

  const updateProductQtyInCart = async (productId, type) => {
    try {
      const response = await postUpdateProductQtyCartService(productId, type);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
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
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductFromCart = async (productId) => {
    try {
      const response = await deleteProductFromCartService(productId);
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: actionTypes.DELETE_PRODUCTS_FROM_CART,
          payload: response.data.cart,
        });
        updateInCartOrInWish(productId, "inCart", false);
      }
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

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,

        loadingCart,
        addProductToCart,
        updateProductQtyInCart,
        deleteProductFromCart,
        totalPriceOfCartProducts,
        actualPriceOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
