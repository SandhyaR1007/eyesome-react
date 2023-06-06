import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Index as Route } from "./routes/index";
import "./custom.styles.css";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

export default App = () => {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <ToastContainer hideProgressBar theme="dark" autoClose={2000} />
        <Route />
      </HelmetProvider>
    </>
  );
};
