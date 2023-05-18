import { createContext, useContext } from "react";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContextProvider;
