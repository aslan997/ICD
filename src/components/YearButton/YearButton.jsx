import React from "react";

const YearButton = ({ year, isActive }) => {
  const buttonClasses = `px-8 rounded-full ${
    isActive ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
  }`;

  return <button className={buttonClasses}>{year}</button>;
};

export default YearButton;
