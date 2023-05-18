import React from "react";
import "./custom.styles.css";
import { Navbar } from "./components";
import { Home, ProductDetails, ProductListing, Signup } from "./pages";

const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      {/* <Home /> */}
      {/* <ProductListing /> */}
      {/* <ProductDetails /> */}
      <Signup />
    </div>
  );
};

export default App;
