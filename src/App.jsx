import React from "react";
import "./custom.styles.css";
import { Navbar } from "./components";

import {
  Profile,
  Checkout,
  Home,
  ProductDetails,
  ProductListing,
} from "./pages";

const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      {/* <Home /> */}
      {/* <ProductListing /> */}
      {/* <ProductDetails /> */}

      <Profile />
    </div>
  );
};

export default App;
