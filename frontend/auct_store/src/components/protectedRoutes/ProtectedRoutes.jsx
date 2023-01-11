import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const session = sessionStorage.getItem("user");
  if (session) {
    return children;
  }
  if (!session) {
    console.log("im here?");
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
