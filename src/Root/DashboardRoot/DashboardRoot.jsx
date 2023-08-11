import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";

const DashboardRoot = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content border-l border-l-gray pl-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-6">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu customClass p-4 w-80 text-base-content">
            <NavLink to="/dashboard" className="my-2">
              Profile
            </NavLink>
            <NavLink to="/dashboard/myorders" className="my-2">
              Order List
            </NavLink>
            <NavLink to="/dashboard/addservice" className="my-2">
              Add Service
            </NavLink>
            <NavLink to="/dashboard" className="my-2">
              Make Admin
            </NavLink>
            <NavLink to="/dashboard/allservices" className="my-2">
              All Services
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
