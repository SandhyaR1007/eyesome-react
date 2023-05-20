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
    const foundInCart = state.cart.find((item) => item.id === product.id);

    if (foundInCart) {
      try {
        const response = await postUpdateProductQtyCartService(
          product.id,
          "increment"
        );
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
    } else {
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
    }

    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      payload: state.allProducts.map((item) =>
        item.id === product.id ? { ...item, inCart: true } : item
      ),
    });
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
