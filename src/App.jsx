import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Index as Route } from "./routes/index";
import "./custom.styles.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Route />
    </>
  );
};

export default App;
