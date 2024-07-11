import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import YearButton from "../YearButton/YearButton";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-2">
          <Dropdown />
          {/* <div className="flex space-x-2">
            <YearButton year={2022} isActive />
            <YearButton year={2023} />
            <YearButton year={2024} />
            <YearButton year={2025} />
            <YearButton year={2026} />
            <YearButton year={2027} />
            <YearButton year={2028} />
          </div> */}
        </div>
        {/* <div>
          <img src="logo.png" alt="ICD Logo" className="h-8" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
