// ProtectedRoute.js
import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ProtectedRoute;
