import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Loader, Navbar } from "../components";

const SharedLayout = () => {
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    const id = setTimeout(() => {
      setLoadingData(false);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <div className="px-[4%] md:px-[10%] pb-2">
      <Navbar />
      <div className="pt-32 sm:pt-20 min-h-[80vh]">
        {loadingData ? <Loader /> : <Outlet />}
      </div>
    </div>
  );
};

export default SharedLayout;
