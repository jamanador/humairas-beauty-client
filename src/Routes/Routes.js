import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddService from "../Pages/Dashboard/AddService/AddService";
import AllServices from "../Pages/Dashboard/AllServices/AllServices";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardRoot from "../Root/DashboardRoot/DashboardRoot";
import Root from "../Root/Root";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {},
        {},
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <DashboardRoot></DashboardRoot>
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/dashboard/myorders",
          element: <MyOrders />,
        },
        {
          path: "/dashboard/addservice",
          element: <AddService />,
        },
        {
          path: "/dashboard/allservices",
          element: <AllServices />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
