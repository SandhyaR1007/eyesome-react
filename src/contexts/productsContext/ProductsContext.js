import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, productsReducer } from "../../reducers/productsReducer";
import {
  deleteProductFromWishlistService,
  getAllCategoriesService,
  getAllProductsService,
} from "../../api/apiServices";
import {
  actionTypes,
  addressTypes,
  filterTypes,
} from "../../utils/actionTypes";
import { useAuthContext } from "..";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(productsReducer, initialState);
  const [currentAddress, setCurrentAddress] = useState(state.addressList[0]);

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

  const updateInCartOrInWish = (productId, type, value) => {
    dispatch({
      type: actionTypes.UPDATE_PRODUCTS,
      payload: state.allProducts.map((item) =>
        item._id === productId ? { ...item, [type]: value } : item
      ),
    });
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

  const addAddress = (newAddress) => {
    dispatch({
      type: addressTypes.ADD_ADDRESS,
      payload: [...state.addressList, newAddress],
    });
  };
  const updateAddress = (addressId, updatedAddress) => {
    dispatch({
      type: addressTypes.ADD_ADDRESS,
      payload: state.addressList.map((item) =>
        item.id === addressId ? updatedAddress : item
      ),
    });
  };
  const deleteAddress = (addressId) => {
    dispatch({
      type: addressTypes.ADD_ADDRESS,
      payload: state.addressList.filter(({ id }) => id === addressId),
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts: state.allProducts,
        wishlist: state.wishlist,
        filters: state.filters,
        maxRange: state.maxRange,
        categoryList: state.categoryList,
        addressList: state.addressList,
        currentAddress,
        loading,
        trendingProducts,
        updateInCartOrInWish,
        getProductById,
        applyFilters,
        clearFilters,
        addAddress,
        updateAddress,
        deleteAddress,
        setCurrentAddress,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
