import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthContextProvider, ProductsContextProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <Router>
          <App />
        </Router>
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
