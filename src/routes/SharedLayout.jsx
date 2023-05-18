import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../components";

const SharedLayout = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
