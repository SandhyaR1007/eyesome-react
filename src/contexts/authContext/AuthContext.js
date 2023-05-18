import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
