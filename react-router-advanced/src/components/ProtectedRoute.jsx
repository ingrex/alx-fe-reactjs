import React from "react";
import { Navigate } from "react-router-dom";

export const useAuth = () => {

  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const auth = useAuth();

  if (!isAuthenticated || !auth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
