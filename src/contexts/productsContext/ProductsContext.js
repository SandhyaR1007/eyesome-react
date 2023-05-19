import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import { getAllProductsService } from "../../api/apiServices";
import { actionTypes } from "../../utils/actionTypes";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await getAllProductsService();
      if (response.status === 200) {
        dispatch({
          type: actionTypes.INITIALIZE_PRODUCTS,
          payload: response.data.products,
        });
      }
      console.log({ response });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        allProducts: state.allProducts,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
