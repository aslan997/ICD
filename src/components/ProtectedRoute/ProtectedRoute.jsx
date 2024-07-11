// ProtectedRoute.js
import React from "react";
import Header from "../Header/Header";

const ProtectedRoute = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProtectedRoute;
