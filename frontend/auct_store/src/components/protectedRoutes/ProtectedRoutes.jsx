import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const session = sessionStorage.getItem("user");
  if (session) {
    return children;
  }
  if (!session) {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
