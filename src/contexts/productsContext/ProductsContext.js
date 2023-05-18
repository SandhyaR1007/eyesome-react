import { createContext, useContext } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
