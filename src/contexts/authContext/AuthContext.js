import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authenticated")
  );
  const [loggingIn, setLoggingIn] = useState(false);

  const login = ({ email, password }) => {
    setLoggingIn(true);
    if (email && password) {
      localStorage.setItem("authenticated", true);
      setIsAuthenticated(true);
      setTimeout(() => {
        setLoggingIn(false);
        navigate("/");
      }, 1000);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loggingIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
