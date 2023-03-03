import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  return !currentUser ? (
    <Navigate
      to="/auth"
      replace
      state={{ from: location.pathname, message: "You must login first" }}
    />
  ) : (
    <Outlet />
  );
}

export default PrivateRoute;
