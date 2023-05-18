import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequiresAuth = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RequiresAuth;
