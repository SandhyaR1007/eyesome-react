import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components";

const SharedLayout = () => {
  return (
    <div className="px-[4%] md:px-[10%] pb-2">
      <Navbar />
      <div className="pt-32 sm:pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
