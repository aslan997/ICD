import React from "react";

const YearButton = ({ year, isActive, onClick }) => {
  const buttonClasses = `text-14 px-8 h-headerYearButton rounded-full ${
    isActive ? "bg-35a989 text-white" : "bg-6c757d text-white"
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {year}
    </button>
  );
};

export default YearButton;
