import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";

function LayoutRoute() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default LayoutRoute;
