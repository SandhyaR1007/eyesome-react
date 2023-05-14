import React from "react";
import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
