import React from "react";
import { Navbar } from "./components";
import { ProductListing } from "./pages";

const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      <ProductListing />
    </div>
  );
};

export default App;
