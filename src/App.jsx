import React from "react";
import "./custom.styles.css";
import { Navbar } from "./components";



import { Checkout, Home, ProductDetails, ProductListing } from "./pages";


const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      {/* <Home /> */}
      {/* <ProductListing /> */}
      {/* <ProductDetails /> */}

      <Checkout />

    </div>
  );
};

export default App;
