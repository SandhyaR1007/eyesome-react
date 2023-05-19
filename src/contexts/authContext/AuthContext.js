import { createContext, useState } from "react";
import { loginService } from "../../api/apiServices";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const [loggingIn, setLoggingIn] = useState(false);

  const loginHandler = async ({ email = "", password = "" }) => {
    setLoggingIn(true);
    try {
      const response = await loginService(email, password);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response?.data?.foundUser)
        );
        setIsAuthenticated(response?.data?.encodedToken);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoggingIn(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(null);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loggingIn, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
