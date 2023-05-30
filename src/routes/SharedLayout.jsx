import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components";

const SharedLayout = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      <div className="pt-24 sm:pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
