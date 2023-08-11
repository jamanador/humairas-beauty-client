import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/Shared/Spinner/LoadingSpinner/LoadingSpinner";
import { authContext } from "../Context/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
