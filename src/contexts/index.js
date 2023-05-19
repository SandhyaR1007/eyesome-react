import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { ProductsContext } from "./productsContext/ProductsContext";

export { default as AuthContextProvider } from "./authContext/AuthContext";
export { default as ProductsContextProvider } from "./productsContext/ProductsContext";

export const useAuthContext = () => useContext(AuthContext);
export const useProductsContext = () => useContext(ProductsContext);
