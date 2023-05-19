import { createContext, useState } from "react";
import { loginService, signupService } from "../../api/apiServices";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  const signupHandler = async ({
    username = "",
    email = "",
    password = "",
  }) => {
    setSigningUp(true);
    try {
      const response = await signupService(username, email, password);
      if (response.status === 200) {
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
      setSigningUp(false);
    }
  };

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
      value={{
        isAuthenticated,
        loggingIn,
        loginHandler,
        logoutHandler,
        signupHandler,
        signingUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
