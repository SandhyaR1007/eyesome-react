import React from "react";
import "./custom.styles.css";
import { Navbar } from "./components";
import { Home, ProductListing } from "./pages";

const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      {/* <Home /> */}
      <ProductListing />
    </div>
  );
};

export default App;
