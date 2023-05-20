import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import {
  getAllProductsService,
  getCartItemsService,
  postAddProductToCartService,
  postUpdateProductQtyCartService,
} from "../../api/apiServices";
import { actionTypes } from "../../utils/actionTypes";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(async () => {
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
          console.log({ cartRes });
          dispatch({
            type: actionTypes.INITIALIZE_CART,
            payload: cartRes.data.cart,
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addProductToCart = async (product) => {
    try {
      const response = await postAddProductToCartService(product);
      console.log({ response });
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: [
          { ...product, addedQty: product.addedQty + 1 },
          ...state.cart,
        ],
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
              ? { ...product, addedQty: product.addedQty + 1 }
              : product
          ),
        });
      } else {
        dispatch({
          type: actionTypes.UPDATE_PRODUCT_QTY_IN_CART,
          payload: state.cart.map((product) =>
            product._id === productId
              ? { ...product, addedQty: product.addedQty - 1 }
              : product
          ),
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletProductFromCart = async (productId) => {
    try {
      const response = await deletProductFromCart(productId);
      console.log({ response });
      dispatch({
        type: actionTypes.DELETE_PRODUCTS_FROM_CART,
        payload: productId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProductsContext.Provider
      value={{
        allProducts: state.allProducts,
        cart: state.cart,
        loading,
        addProductToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
