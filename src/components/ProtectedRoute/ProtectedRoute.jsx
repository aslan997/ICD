// ProtectedRoute.js
import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProtectedRoute;
